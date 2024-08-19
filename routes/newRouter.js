const express = require('express');
const newRouter = express.Router();
const { messages } = require('./indexRouter');

newRouter.get('/', (req, res) => res.render('form'));

module.exports = newRouter;
