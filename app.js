const express = require('express');
const path = require('node:path');
require('dotenv').config();
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
