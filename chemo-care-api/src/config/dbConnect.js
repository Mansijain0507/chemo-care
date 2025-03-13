const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    mongoose.set("debug", true);
    const connect = await mongoose.connect(
      process.env.MONGODB_CONNECTION_STRING,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 20000, // 20 seconds
      }
    );
    console.log(
      `Database connected : ${connect.connection.host} , ${connect.connection.name}`
    );
  } catch (err) {
    console.log(`Error connecting to database : ${err.message}`);
    process.exit(1);
  }
};

module.exports = dbConnect;
