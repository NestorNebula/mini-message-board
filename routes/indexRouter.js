const express = require('express');
const indexRouter = express.Router();
const indexController = require('../controllers/indexController');

indexRouter.get('/', indexController.getMessages);

module.exports = { indexRouter };
