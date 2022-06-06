const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');

//load config
dotenv.config({ path: './config/config.env' });

connectDB();

//initialize app
const app = express();

const port = process.env.PORT || 5000;
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
