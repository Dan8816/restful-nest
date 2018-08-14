const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {type: String, required:[true, "Please enter a task title!"], maxlength:[25, "Name must be shorter than 25 chars!"]},
    desc: {type: String, required:[true, "Please provide a description?"], minlength: 2, maxlength: 45},
    completed: {type: Boolean, default: false}
}, {timestamps: true});

mongoose.model("Task", taskSchema);