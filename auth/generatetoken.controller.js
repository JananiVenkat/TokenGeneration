const jwt = require('jsonwebtoken');
const secret = require('./secret.json');

function generatetoken() {
  const token = jwt.sign({ clientId: 'webapp' }, secret.secretKey, { expiresIn: 120 });
  return token;
}

function verifytoken(token, done) {
  jwt.verify(token, secret.secretKey, (err, decoded) => {
    if (err) {
      return done(undefined, err);
    } else {
      const secrets = { "api": "templates", "tools": "github" ,"roles": "admin"};
      return done(undefined, secrets);
    }
  })
}

module.exports = {
  generatetoken,
  verifytoken,
};
