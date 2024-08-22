const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function insertMessage(message) {
  await pool.query(
    'INSERT INTO messages (username, message, date) VALUES ($1, $2, $3)',
    [message.user, message.text, message.added]
  );
}

async function getMessage(id) {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [
    id,
  ]);
  return rows;
}

module.exports = {
  getAllMessages,
  insertMessage,
  getMessage,
};
