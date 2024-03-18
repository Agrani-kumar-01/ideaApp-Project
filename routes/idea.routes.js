//  route for get call GET 127.0.0.1:8000/ideaApp/api/v1/ideas
const idea_controller = require("../controllers/idea.controller")

module.exports = (app)=>{
    app.get("/ideaApp/api/v1/ideas",idea_controller.getAllIdeas)
}

