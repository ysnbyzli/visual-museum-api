const express = require("express");
const helmet = require("helmet");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");
const config = require("./config");
const loaders = require("./loaders");
const {
  PersonRoutes,
  EventRoutes,
  CategoryRoutes,
  TagRoutes,
  StaticRoutes,
} = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

config();
loaders();

const app = express();

app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "./", "uploads")));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(helmet());
app.use(fileUpload());

app.listen(process.env.APP_PORT, () => {
  console.log("sunucu ayağa kalktı 🚀");

  app.get("/", (req, res) => {
    res.send("Welcome to my project");
  });

  app.use("/persons", PersonRoutes);
  app.use("/events", EventRoutes);
  app.use("/categories", CategoryRoutes);
  app.use("/tags", TagRoutes);
  app.use("/statics", StaticRoutes);

  app.use((req, res, next) => {
    const error = new Error("Aradağınız sayfa bulunmamaktadır!");
    error.status = 404;
    next(error);
  });

  app.use(errorHandler);
});
