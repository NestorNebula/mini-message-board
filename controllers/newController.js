const db = require('../db/queries');

const getNew = (req, res) => res.render('form');

const postNew = async (req, res) => {
  const messageUser = req.body.author;
  const messageText = req.body.message;
  if (messageUser && messageText) {
    db.insertMessage({
      user: messageUser,
      text: messageText,
      added: new Date().toISOString().split('T')[0],
    });
  }
  res.redirect('/');
};

module.exports = { getNew, postNew };
