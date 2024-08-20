const { messages } = require('../routes/indexRouter');

const getMessage = (req, res) => {
  const message = messages[req.params.message];
  if (!message) {
    throw new Error("Couldn't find the message.");
  }
  res.render('messageDetails', { message: message });
};

module.exports = { getMessage };
