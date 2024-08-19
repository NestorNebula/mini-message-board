const express = require('express');
const messagesRouter = express.Router();
const messageController = require('../controllers/messagesController');

messagesRouter.get('/:message', messageController.getMessage);

module.exports = messagesRouter;
