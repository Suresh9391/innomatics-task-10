const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  const mongoose = require('mongoose');

  // Store connection string in environment variable
  const mongoURI = process.env.MONGO_URI;

  mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));

  // try {
  //   mongoose.connect(process.env.MONGODB_URL);
  //   console.log("Database Connected Successfully");
  // } catch (error) {
  //   console.log("DAtabase error", error);
  // }
};
module.exports = dbConnect;
