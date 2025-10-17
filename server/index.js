const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const connectToDB = require("./Startup/db");
const cors = require("cors");

connectToDB();
app.use(express.json());
app.use(
  cors({
    origin: `${process.env.WEB_URL}`,
  })
);
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server connected to ${PORT}`);
});
