const { messages } = require('../routes/indexRouter');

const getMessage = (req, res) => {
  const message = messages[req.params.message];
  if (!message) {
    res.redirect('/');
    return;
  }
  res.render('messageDetails', { message: message });
};

module.exports = { getMessage };
