const { messages } = require('../routes/indexRouter');

const getNew = (req, res) => res.render('form');

const postNew = (req, res) => {
  const messageUser = req.body.author;
  const messageText = req.body.message;
  if (messageUser && messageText) {
    messages.push({
      text: messageText,
      user: messageUser,
      added: new Date().toLocaleDateString('en'),
    });
  }
  res.redirect('/');
};

module.exports = { getNew, postNew };
