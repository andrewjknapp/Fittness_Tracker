const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: {
        type: Array,
        default:[]
    }
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;