const { messages } = require('../routes/indexRouter');

const getMessage = (req, res) => {
  const message = messages[req.params.message];
  if (!message) {
    throw new Error("The message doesn't exist.");
  }
  res.render('messageDetails', { message: message });
};

module.exports = { getMessage };
