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
    firstName: 'Ciarra',
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
    email: "Wilbert.Zboncak@terrence.info", 
    password: bcrypt.hashSync("test", bcrypt.genSaltSync(bcryptSalt)),
    profilePicPath: "",
    status: 'Active',
    confirmationCode: createConfirmationCode()

  }),
  new User({
    firstName: 'Jon',
    lastName: 'Snow',
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
    firstName: 'Daenerys',
    lastName: "Targaryen",
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

var extraUsers = [
  {
    first: "Sebastian",
    last: "Klein",
    email: "Sebastian.Klein@samantha.org",
    address: "018 Napoleon Village",
    created: "July 7, 2017",
    balance: "$3,329.57"
    },
    {
    first: "Aidan",
    last: "Leannon",
    email: "greysquirrel23@gmail.com",
    address: "23521 Conn Stravenue",
    created: "March 16, 2011",
    balance: "$558.81"
    },
    {
    first: "Obie",
    last: "Larkin",
    email: "Obie.Larkin@dusty.com",
    address: "46220 Bertram Isle",
    created: "June 29, 2016",
    balance: "$8,668.53"
    },
    {
    first: "Alexie",
    last: "Hegmann",
    email: "Alexie.Hegmann@markus.net",
    address: "42343 Huel Causeway",
    created: "December 15, 2017",
    balance: "$3,840.98"
    },
    {
    first: "Rhiannon",
    last: "Schumm",
    email: "orangeturtle68@gmail.com",
    address: "51007 Langworth Mountains",
    created: "May 31, 2018",
    balance: "$4,325.89"
    },
    {
    first: "Erika",
    last: "Kautzer",
    email: "Erika.Kautzer@adolfo.name",
    address: "10813 Connelly Hills",
    created: "December 22, 2014",
    balance: "$830.32"
    },
    {
    first: "Elwyn",
    last: "Marquardt",
    email: "Elwyn.Marquardt@alda.name",
    address: "41526 Kris Passage",
    created: "July 15, 2015",
    balance: "$1,478.83"
    },
    {
    first: "Jayne",
    last: "Kutch",
    email: "maroonrabbit45@gmail.com",
    address: "6871 Lillian Mission",
    created: "April 23, 2011",
    balance: "$4,974.26"
    },
    {
    first: "Stan",
    last: "Schmidt",
    email: "tanwolf97@gmail.com",
    address: "47171 Gottlieb Vista",
    created: "March 26, 2013",
    balance: "$7,867.69"
    },
    {
    first: "Ulises",
    last: "Ullrich",
    email: "silverfrog49@gmail.com",
    address: "3456 Feeney Greens",
    created: "June 7, 2011",
    balance: "$8,870.28"
    },
    {
      first: "Cletus",
      last: "Dickens",
      email: "cyanrabbit92@gmail.com",
      address: "4569 Kuphal Pass",
      created: "October 24, 2013",
      balance: "$7,405.88"
      },
  ]

for (var i=0; i< extraUsers.length; i++) {
    users.push(new User ({
      firstName: extraUsers[i].first,
      lastName: extraUsers[i].lastName,
      email: extraUsers[i].email, 
      password: bcrypt.hashSync("test", bcrypt.genSaltSync(bcryptSalt)),
      profilePicPath: "",
      status: 'Active',
      confirmationCode: createConfirmationCode()
    }))
}

module.exports = users;