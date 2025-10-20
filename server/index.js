const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const connectToDB = require("./Startup/db");
const allRoute = require("./Route/allRoute.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");

connectToDB();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: `${process.env.WEB_URL}`,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api", allRoute);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server connected to ${PORT}`);
});
