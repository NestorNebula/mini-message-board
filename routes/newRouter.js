const express = require('express');
const newRouter = express.Router();
const newController = require('../controllers/newController');

newRouter.get('/', newController.getNew);
newRouter.post('/', newController.postNew);

module.exports = newRouter;
