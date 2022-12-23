const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const appRoutes = require("./routes/workouts");

const app = express();
mongoose.set('strictQuery', true);
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", appRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db listenning on port 4000");
    });
  })
  .catch((error) => [console.log(error)]);
