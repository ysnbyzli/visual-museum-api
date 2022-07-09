const Mongoose = require("mongoose");

const db = Mongoose.connection;

db.once("open", () => {
  console.log("DB bağlantısı gerçekleşti..");
});

const connectDB = async () => {
  await Mongoose.connect(
    `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.o4l1q.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = {
  connectDB,
};
