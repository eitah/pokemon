/* eslint-disable new-cap */

import express from 'express';
import Poke from '../models/poke';
import passport from 'passport';
const router = module.exports = express.Router();
const auth = passport.authenticate('jwt', { session: false });

// index
router.get('/', auth, (req, res) => {
  Poke.find().exec((err, pokemon) => {
    res.send({ pokemon });
  });
});

// post
router.post('/', auth, (req, res) => {
  const poke = new Poke(req.body);
  poke.save(() => {
    res.send({ poke });
  });
});
