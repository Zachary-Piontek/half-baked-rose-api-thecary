const { Router } = require('express');
const { Quote } = require('../models/Quote');

module.exports = Router()
  .post('/', async (req, res) => {
    const data = await Quote.insert(req.body);
    res.json(data);
  });
