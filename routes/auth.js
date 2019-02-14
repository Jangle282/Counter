const express = require("express");
const passport = require('passport');
const User = require("../models/User");
const Project = require('../models/Project')
const ProjectUser = require('../models/ProjectUser')
const {transporter, createConfirmationCode} = require("../configs/emailTransporter");
const emailTemplate = require("../configs/confirmationEmail").template;
const {isConnected, isNotConnected} = require("../configs/middlewares")
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const router = express.Router();

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get("/login", isNotConnected, (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/data-capture",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));


router.get("/signup", isNotConnected, (req, res, next) => {
  Project.find()
  .then(projects => {
    res.render("auth/signup", {projects});
  })
});

router.post("/signup", (req, res, next) => {
  
  const {firstName, lastName, email, password, role, project } = req.body;
  var projects = []
  if (typeof req.body.project === 'string') projects.push(req.body.project)
  else {var projects = project}

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
    .then((results) => {
      var participantId = results[0]._id
      for (let i in projects)  {
      Project.find({ projectName: projects[i]})
      .then((projects) => {
        const newProjectUser = new ProjectUser ({
          _project: projects[0]._id,
          _participant: participantId,
          })
          newProjectUser.save() 
        })
      }
    res.render("auth/signupSuccess");
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

router.get("/logout", isConnected, (req, res) => {
  req.logout();
  res.redirect("/");
});

//-----GOOGLE CRAP----
passport.use(new GoogleStrategy({
  clientID: process.env.clientId,
  clientSecret: process.env.clientSecret,
  callbackURL: "http://localhost:3000/auth/google/callback"
},
function(accessToken, refreshToken, profile, done) {
  console.log("I am in the strategy", accessToken, refreshToken, profile)
  // look if that user exists
  // if user exists, redirect to main page
  // otherwise, create a new user
  // then redirect to main page

  //J need to find a way to get the email address of the user. Perhaps need to verify th domain like Naaman. 
  User.findOne({ email: "Kiarra.Doyle@darwin.net" }, (err, user) => {
    console.log("User", user)
    return done(null, user);
  })
  
  //User.findOrCreate({ googleId: profile.id }, function (err, user) {
  //  return done(err, user);
  //});
}
));

router.get('/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }
  ));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/auth/login' }),
  function(req, res) {
    console.log("In google callback")
    res.redirect('/');
  });


module.exports = router;
