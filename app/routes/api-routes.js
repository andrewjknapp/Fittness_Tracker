const Workout = require("../models/Workout");

module.exports = function(app) {

    // app.get("/api/workouts", (req, res) => {
    //     res.json("hello");
    // })

    app.post("/api/workouts", (req, res) => {
        Workout.create({})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
        })
    })

    // app.put("/api/workouts/:id", (req, res) => {
    //     res.json("hello");
    // })

    // app.get("/api/workouts/range", (req, res) => {
    //     res.json("hello");
    // })
}