const db = require('../db/queries');

const getMessage = async (req, res) => {
  const [message] = await db.getMessage(req.params.message);
  if (!message) {
    throw new Error("Couldn't find the message.");
  }
  res.render('messageDetails', { message });
};

module.exports = { getMessage };
