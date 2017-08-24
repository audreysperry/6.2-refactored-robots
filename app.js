const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./router');
const mongo = require('./mongoutils');

const app = express();


app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use('/static', express.static('public'));

routes(app);

var database = process.env.MONGODB_URI || 'mongodb://localhost:27017/robots2db';
//connect to the database and start teh server once the connectionis made
mongo.connect(database, () => {
  app.listen(process.env.PORT || 3000);
});



module.exports = app;
