const express = require('express');
const path = require('node:path');
require('dotenv').config();
const app = express();
const indexRouter = require('./routes/indexRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);

const PORT = process.env.PORT;
app.listen(PORT);
