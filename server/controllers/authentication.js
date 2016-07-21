/* eslint-disable new-cap */

import express from 'express';
import User from '../models/user';
import passport from 'passport';
const router = module.exports = express.Router();

// register
router.post('/register', (req, res) => {
  User.create(req.body, (err, user) => {
    if (!user) {
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!400 status');
      return res.status(400).send();
    }
    console.log('200 status recieved');
    return res.status(200).send();
  });
});

// login
router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  const token = req.user.token();
  res.send({ token });
});
