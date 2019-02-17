const nodemailer = require('nodemailer')

// ---set up email account to send emails from 
let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD 
  }
});
 //---create unique (or as close to unique as neccesary for this project) confirmation token for activation link 
function createConfirmationCode() {
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let token = "";
  for (let i = 0; i < 25; i++) {
    token += characters[Math.floor(Math.random() * characters.length)];
  }
  return token;
}

module.exports = {transporter, createConfirmationCode};