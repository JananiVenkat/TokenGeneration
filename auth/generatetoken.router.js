const router = require('express').Router();
const jwt = require('jsonwebtoken');
const tokenCtrl = require('./generatetoken.controller');

/*
* Effective URI to access the token
* GET /auth/token
* Effective URI to verify the token
* GET /auth/verifytoken?token=token
*/
router.get('/token', (req, res) => {
  try {
    return res.send(tokenCtrl.generatetoken());
  } catch (err) {
    return res.status(500).send({ error: 'Unexpected internal error...' });
  }
})

router.get('/verifytoken', (req, res) => {
  try {
    if (req.query.token) {
      tokenCtrl.verifytoken(req.query.token, (err, result) => {
        if (err) {
          return res.send(err);
        } else {
          return res.send(result);
        }
      });
    }
  } catch (err) {
    return res.status(500).send({ error: 'Unexpected internal error...' });
  }
})

module.exports = router;
