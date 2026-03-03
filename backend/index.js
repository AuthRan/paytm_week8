const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const mainRouter = require("./routes/index")
const cors = require("cors")
// Load env file
dotenv.config();

app.use(cors())
app.use(express.json())

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

const app = express();

app.use("/api/v1", mainRouter)

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
