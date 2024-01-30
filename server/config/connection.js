const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect(
  "mongodb+srv://tanishpahwa36:Tanish@cluster0.hpgsihd.mongodb.net/fitness",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!");
  }
);

module.exports = mongoose.connection;
