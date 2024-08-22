const { Client } = require('pg');
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(30),
  message VARCHAR(255),
  date DATE
);

INSERT INTO messages (username, message, date)
VALUES
  ('Amando', 'Hi there!', '2024-08-22'),
  ('Charles', 'Hello World!', '2024-08-22');
`;

async function main() {
  const client = new Client({
    connectionString: process.env.PRODUCTION_DB,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
}

main();
