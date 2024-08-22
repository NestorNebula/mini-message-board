const db = require('../db/queries');
const { body } = require('express-validator');

const validateMessage = [
  body('author').trim().escape(),
  body('message').trim().blacklist('<>/'),
];

const getNew = (req, res) => res.render('form');

const postNew = [
  validateMessage,
  async (req, res) => {
    const messageUser = req.body.author;
    const messageText = req.body.message;
    if (messageUser && messageText) {
      await db.insertMessage({
        user: messageUser,
        text: messageText,
        added: new Date().toISOString().split('T')[0],
      });
    }
    res.redirect('/');
  },
];

module.exports = { getNew, postNew };
