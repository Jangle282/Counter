// ---Sign up confirmation email 
module.exports = {
  template: (firstName, lastName, confirmationCode) => {return `<h1>Confirmation Email</h1>
  <h2>Hello ${firstName} ${lastName}!</h2>
  <p>Thank you for joining Data Counter! 
  <br>
  Please confirm your registration by clicking the following link:</p>
  <a href="https://datacounter.herokuapp.com/auth/confirm/${confirmationCode}">CONFIRM</a>`}
}