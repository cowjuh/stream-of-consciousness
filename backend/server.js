const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config({ path: __dirname + "/.env" });

const app = express();

const publicPath = path.join(__dirname, "../", "/frontend/build");
const uri = process.env.ATLAS_URI;
const notesRouter = require("./routes/notes");
const usersRouter = require("./routes/users");

const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/notes", notesRouter);
app.use("/api/users", usersRouter);

app.use(express.static(publicPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "/frontend/index.html"));
});

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
