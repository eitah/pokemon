/* eslint-disable new-cap */

import express from 'express';
import Poke from '../models/poke';
const router = module.exports = express.Router();

// index
router.get('/', (req, res) => {
  Poke.find().exec((err, pokemon) => {
    res.send({ pokemon });
  });
});

// post
router.post('/', (req, res) => {
  const poke = new Poke(req.body);
  poke.save(() => {
    res.send({ poke });
  });
});
