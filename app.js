const express = require('express');
const path = require('node:path');
require('dotenv').config();
const app = express();
const { indexRouter } = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');
const messagesRouter = require('./routes/messagesRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/messages', messagesRouter);

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send(err.message);
});

const PORT = process.env.PORT;
app.listen(PORT);
