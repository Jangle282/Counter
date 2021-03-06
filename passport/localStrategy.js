const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User          = require('../models/User');
const bcrypt        = require('bcrypt');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, 
  (email, password, done) => {
    User.findOne({ email })
    .then(foundUser => {
      // --- validation user is not already signed up / entered incorrect information ---
      if (!foundUser) {
        done(null, false, { message: 'Incorrect email' });
        return;
      }
      if (!bcrypt.compareSync(password, foundUser.password)) {
        done(null, false, { message: 'Incorrect password' });
        return;
      }
      if(foundUser.status != "Active"){
        done(null, false, { message: 'You account is not activated yet'});
        return;
      }

      done(null, foundUser);
    })
    .catch(err => done(err));
  }
));
