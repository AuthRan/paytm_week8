const express = require("express");
const dotenv = require("dotenv");

// Load env file
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

const app = express();

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
