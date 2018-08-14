const mongoose = require("mongoose");
const Task = mongoose.model("Task");

module.exports = {
    index: (req, res)=>{
        console.log("Hitting the index server method");
        Task.find({})//find all instances of the mongoose model
        .then(Tasks => res.json(Tasks))
        .catch(err => res.send(err))
    },
    create: (req, res)=>{
        console.log("hitting the add task server method");
        Task.create(req.body)//create an instance of the mongoose model from body data
        .then(Task => res.json(Task))
        .catch(err => res.send(err))
    },
    show: (req, res)=>{//retrieve an instance of the mongoose model based on an attribute mathing get url data
        console.log("hitting the show task server method");
        Task.findById(req.params.id)
        .then(Task => res.json(Task))
        .catch(err => res.send(err))
    },
    update: (req, res) =>{
        console.log("hitting the update server method");
        Task.findByIdAndUpdate({_id: req.params.id}, req.body,(err, task)=>{
            if(err){
                console.log("Hit errors" + err);
                res.json(err);
            }else{
                console.log("successful update");
                console.log(task);
                res.json(task);
            }
        })
    },
    remove: (req, res) =>{
        console.log("hitting the remove server method");
        Task.findByIdAndRemove(req.params.id, (err)=>{
            if(err){
                console.log(err);
                res.json(err);
            }else{
                res.json({success: true});
            }
        })
    }
}