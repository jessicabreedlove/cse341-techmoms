const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const connectDB = require('./config/db.js');

//load config
dotenv.config({ path: './config/config.env' });

connectDB();

//initialize app
const app = express();

//logging (with morgan)
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//express handlebars -- not really working to change to .hbs
app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

//routes
app.use('/', require('./routes/index'));

const port = process.env.PORT || 5000;

//what i had before oauth video
// const bodyParser = require('body-parser');
// const connect = require('./db/connect');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

// connect.initDatabase();

// app.use(bodyParser.json()).use('/', require('./routes'));
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.get('/api-docs', swaggerUi.setup(swaggerDocument));
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');

//   //do I even need all of these?
//   res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition');

//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Z-Key, Content-Disposition'
//   );

//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'GET, POST, PUT, DELETE, OPTIONS'
//   );

//   next();
// });

app.listen(
  port,
  console.log(`App listening on port ${port} in ${process.env.NODE_ENV}`)
);
