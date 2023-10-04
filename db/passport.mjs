import passport from "passport";
import FacebookTokenStrategy from "passport-facebook-token";

passport.use(
  new FacebookTokenStrategy(
    {
      clientID: process.env.FB_APP_ID,
      clientSecret: process.env.FB_APP_SECRET,
    },
    (accessToken, refreshToken, profile, done) =>
      done(null, {
        accessToken,
        refreshToken,
        profile,
      })
  )
);

// promisified authenticate functions
const authenticateFacebook = (req, res) =>
  new Promise((resolve, reject) => {
    passport.authenticate(
      "facebook-token",
      { session: false },
      (err, data, info) => {
        if (err) reject(err);
        resolve({ data, info });
      }
    )(req, res);
  });

module.exports = { authenticateFacebook, authenticateGoogle };
