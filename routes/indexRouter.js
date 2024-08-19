const express = require('express');
const indexRouter = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toLocaleDateString('en'),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleDateString('en'),
  },
];

indexRouter.get('/', (req, res) => res.render('index', { messages: messages }));

module.exports = { indexRouter, messages };
