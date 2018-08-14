const tasks = require("./../controllers/tasks");

module.exports = (app)=>{
    app.get("/tasks", tasks.index),
    app.post("/tasks", tasks.create),
    app.get("/tasks/:id", tasks.show),
    app.put('/tasks/:id', tasks.update),
    app.delete('/tasks/:id', tasks.remove)
}