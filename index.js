const express = require("express")
const app = express()

// require("./routes/idea.routes")(app)
const routers = require("./routes/idea.routes")
routers(app)

app.listen(8000,()=>{
    console.log("App started on the port no : ",8000);
})
