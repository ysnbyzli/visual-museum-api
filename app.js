const express = require("express");
const config = require("./config");
const loaders = require("./loaders");

config();
loaders();

const app = express();

app.listen(process.env.APP_PORT, () => {
  console.log("sunucu ayağa kalktı 🚀");
});
