const express = require('express');
const IndexController = require('./controllers/index');
const ProfileController = require('./controllers/profile');



module.exports = function(app) {
  const indexRouter = express.Router();
  const profileRouter = express.Router();




  indexRouter.get('/', IndexController.index);

  profileRouter.get('/:id/', ProfileController.detail);


  app.use('/', indexRouter);
  app.use('/robot', profileRouter);
}
