
module.exports = function(app) {

    app.get("/api/workouts")

    app.post("/api/workouts")

    app.get("/api/workouts/range", (req, res) => {
        res.send("hello");
    })
}