const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const transactionRoute = require("./Routes/Transaction");
const cors = require("cors");

connectDB();
app.use(cors());
app.use(bodyParser.json());
// Dev Logginf Middleware
if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
    })
  );
  app.use(morgan("dev"));
  //   Morgan gives information about each request
  //   while cors allows to deal with react local host 3000
}

app.get("/", (rer, res) => {
  res.send("expense backend is running");
});

app.use("/transactions", transactionRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`.red.bold);
});
