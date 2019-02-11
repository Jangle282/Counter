module.exports = {
  //middleware that checks if user is connected
  isConnected: function(req, res, next){
    if (req.user){
      next()
    }
    else {
      res.redirect('/auth/login')
    }
  }
}