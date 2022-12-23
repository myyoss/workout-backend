const { timeStamp } = require("console");
const mongoose = require("mongoose");
const Scheme = mongoose.Schema;
const workoutSchema = new Scheme(
  {
    title: {
      type: String,
      required: true,
    },
    repetitions: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Workout', workoutSchema)