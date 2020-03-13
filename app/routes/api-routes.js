
module.exports = function(app) {

    app.get("/api/workouts", (req, res) => {
        res.json("hello");
    })

    app.post("/api/workouts", (req, res) => {
        res.json("hello");
    })

    app.put("/api/workouts/:id", (req, res) => {
        res.json("hello");
    })

    app.get("/api/workouts/range", (req, res) => {
        res.json("hello");
    })
}