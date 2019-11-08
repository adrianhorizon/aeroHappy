import dotenv from 'dotenv';
import User from '../models/user';

const TwitterStrategy = require('passport-twitter').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

dotenv.config();

module.exports = (passport) => {

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });

  passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_KEY,
    consumerSecret: process.env.TWITTER_SECRET,
    callbackURL: '/auth/twitter/callback',
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({ provider_id: profile.id }, (err, user) => {
      if (err) throw (err);

      if (!err && user != null) return done(null, user);

      const newUser = new User({
        provider_id: profile.id,
        provider: profile.provider,
        name: profile.displayName,
        photo: profile.photos[0].value,
      });

      newUser.save((err) => {
        if (err) throw err;
        done(null, newUser);
      });
    });
  }));

  passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_KEY,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'displayName', /*'provider',*/ 'photos'],
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({ provider_id: profile.id }, (err, user) => {
      if (err) throw (err);
      if (!err && user != null) return done(null, user);

      const newUser = new User({
        provider_id: profile.id,
        provider: profile.provider,
        name: profile.displayName,
        photo: profile.photos[0].value,
      });

      newUser.save((err) => {
        if (err) throw err;
        done(null, newUser);
      });
    });
  }));

};
