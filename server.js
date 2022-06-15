const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const connectDB = require('./config/db.js');

//me trying to bridge the gap with swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

//load config
dotenv.config({ path: './config/config.env' });

//passport config
require('./config/passport')(passport);

connectDB();

//initialize app
const app = express();

//logging (with morgan)
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//express handlebars
app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

//sessions middleware -- needs to be above passport middleware
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//static folder
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));

const port = process.env.PORT || 5000;

//swagger to work?
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

//app listening!
app.listen(
  port,
  console.log(`App listening on port ${port} in ${process.env.NODE_ENV}`)
);
