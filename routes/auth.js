const express = require("express");
const passport = require('passport');
const User = require("../models/User");
const {transporter, createConfirmationCode} = require("../configs/emailTransporter");
const emailTemplate = require("../configs/confirmationEmail").template;

const router = express.Router();

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const {firstName, lastName, email, password, role} = req.body;
  
  //add variabl for join selections
  if (firstName === "" || lastName === "" || email === "" || password === "") {
    res.render("auth/signup", { message: "Please indicate your name, email and password" });
    return;
  }

  User.findOne({ email }, "email", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The email is already registered" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);
    const confirmationCode = createConfirmationCode();

    const newUser = new User({
      firstName, lastName, email, role,
      password: hashPass,
      confirmationCode
    });

    Promise.all([
      newUser.save(),
      transporter.sendMail({
        from: '"Data Counter" <irondatacounter@project.com>',
        to: email,
        subject: "Activate your account",
        text: `Hello ${firstName} ${lastName}! Thank you for joining Data Counter! Please confirm your registration by clicking the following link: 
        "http://localhost:3000/auth/confirm/${confirmationCode}"`,
        html: emailTemplate(firstName, lastName, confirmationCode)})
    ])
    .then(() => {
      //if (projectSelected)  - create object ProjectUser
      res.redirect("/");
    })
    .catch(err => {
      res.render("auth/signup", { message: "Something went wrong" });
    })
  });
});

router.get("/confirm/:confirmCode", (req, res, next) => {
  User.findOneAndUpdate(
    {confirmationCode: req.params.confirmCode}, 
    {status: "Active"}
    )
    .then(user => {
      res.redirect("/")
    })
    .catch(err => 
      res.render("activation-error"))
})

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
