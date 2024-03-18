// Write the logic for crreating controller for the idea resource

const ideas = require("../models/ideas.model")

exports.getAllIdeas = (req,res)=>{
    // first read all the ideas from the idea model file
    // return all those ideas
    let std_id = req.query.id
    let std_obj = ideas[std_id]
    if(std_obj){
        res.status(200).send(std_obj)
    }else{
        res.status(500).send(ideas)
    }

}
