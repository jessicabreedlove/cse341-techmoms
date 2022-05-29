const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My Tech Mom API',
    description: 'Tech Moms Directory API',
  },
  host: 'cse341-techmoms.herokuapp',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });
