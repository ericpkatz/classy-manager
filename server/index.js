const app = require("./app");
require("dotenv").config();
const { init } = require('./db');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  init();
  console.log(`Listening on port ${PORT}...`);
});
