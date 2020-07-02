const app = require('./app');
require('dotenv/config');

app.listen(process.env.PORT_SERVER, () => {
  console.log('Server running at port', process.env.PORT_SERVER);
});