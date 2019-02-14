const User = require("../models/User");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const {transporter, createConfirmationCode} = require("../configs/emailTransporter");


let users = [
  new User ({
    firstName: 'Dawn',
    lastName: 'Satterfield',
    email: "Dawn.Satterfield@leonard.biz", 
    password: bcrypt.hashSync("test", bcrypt.genSaltSync(bcryptSalt)),
    profilePicPath: "",
    status: 'Active',
    confirmationCode: createConfirmationCode()
  }),
  new User({
    firstName: 'Kiarra',
    lastName: 'Doyle',
    email: "Kiarra.Doyle@darwin.net", 
    password: bcrypt.hashSync("test", bcrypt.genSaltSync(bcryptSalt)),
    profilePicPath: "",
    status: 'Active',
    confirmationCode: createConfirmationCode()
  }),
  new User({
    firstName: 'Kiarra',
    lastName: 'Doyle',
    email: "Kiarra.Doyle@darwin.net", 
    password: bcrypt.hashSync("test", bcrypt.genSaltSync(bcryptSalt)),
    profilePicPath: "",
    status: 'Active',
    confirmationCode: createConfirmationCode()

  }),
  new User({
    firstName: 'Lela',
    lastName: 'Connelly',
    email: "orangerabbit21@gmail.com", 
    password: bcrypt.hashSync("test", bcrypt.genSaltSync(bcryptSalt)),
    profilePicPath: "",
    status: 'Active',
    confirmationCode: createConfirmationCode()

  }),
  new User({
    firstName: 'Wiley',
    lastName: 'Walker',
    email: "limefrog58@gmail.com", 
    password: bcrypt.hashSync("test", bcrypt.genSaltSync(bcryptSalt)),
    profilePicPath: "",
    status: 'Active',
    confirmationCode: createConfirmationCode()

  }),
  new User({
    firstName: 'Yasmin',
    lastName: 'Erdman',
    email: "Yasmin.Erdman@belle.net", 
    password: bcrypt.hashSync("test", bcrypt.genSaltSync(bcryptSalt)),
    profilePicPath: "",
    status: 'Active',
    confirmationCode: createConfirmationCode()

  }),
  new User({
    firstName: 'Rogelio',
    lastName: 'Erdman',
    email: "ivorygiraffe32@gmail.com", 
    password: bcrypt.hashSync("test", bcrypt.genSaltSync(bcryptSalt)),
    profilePicPath: "",
    status: 'Active',
    confirmationCode: createConfirmationCode()

  }),
  new User({
    firstName: 'Mossie',
    lastName: "D'Amore",
    email: "Mossie.D'Amore@sedrick.net", 
    password: bcrypt.hashSync("test", bcrypt.genSaltSync(bcryptSalt)),
    profilePicPath: "",
    status: 'Active',
    confirmationCode: createConfirmationCode()

  }),
  new User({
    firstName: 'Clay',
    lastName: 'Barkus',
    email: "lavendergiraffe60@gmail.com", 
    password: bcrypt.hashSync("test", bcrypt.genSaltSync(bcryptSalt)),
    profilePicPath: "",
    status: 'Active',
    confirmationCode: createConfirmationCode()

  })
]

module.exports = users;