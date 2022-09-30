const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const routes = require('./controllers/index');
const sequelize = require('./config/connection');
const exp = require('constants');
// const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: true,
  };

  app.use(session(sess));

 
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars')

  app.use(express.json());
  app.use(express.urlencoded({ extended: true}))
  app.use(express.static(path.join(__dirname, 'public')))

  app.use(routes);



  sequelize.sync({ force: false}).then(()=>{
    app.listen(PORT, () => console.log('Listening now'))
  });

  