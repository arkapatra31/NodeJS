const passport = require('passport')
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const GOOGLE_CLIENT_ID = "1085171670095-2rocvln3812b9sum753l7krh7c9tea5e.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "buKijfHdYoFTe7MYrf8azBmP";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:4000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    /* User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    }); */
    return done(null,profile);
  }
));

passport.serializeUser((user,done) => {
  done(null,user);
});

passport.deserializeUser((user,done) => {
  done(null,user);
});