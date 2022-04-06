const express = require("express");
const helmet = require("helmet");
const fileUpload = require("express-fileupload");
const path = require("path");
const config = require("./config");
const loaders = require("./loaders");
const { PersonRoutes } = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

config();
loaders();

const app = express();

app.use("/uploads", express.static(path.join(__dirname, "./", "uploads")));
app.use(express.json());
app.use(helmet());
app.use(fileUpload());

app.listen(process.env.APP_PORT, () => {
  console.log("sunucu ayağa kalktı 🚀");

  app.use("/person", PersonRoutes);

  app.use((req, res, next) => {
    const error = new Error("Aradağınız sayfa bulunmamaktadır!");
    error.status = 404;
    next(error);
  });

  app.use(errorHandler);
});
