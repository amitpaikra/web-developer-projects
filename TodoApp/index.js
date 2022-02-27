//acquire  express
const express = require('express');
const app = express();
const port = 8000;

//any url first goes to routers folder in there index.js file
app.use("/", require("./routers/"));//by default it select index.js

//setup view engine
app.set('view engine', "ejs");
app.set('views', "./views");
//using middleware to decode when form is submitted from browser
app.use(express.urlencoded());//using middleware
//setup statics which are present in assets folder
app.use(express.static("assets"));

//our app is listening on port
app.listen(port, function(err){
    if(err){
        console.log(`Error occured on listening in port ${port}`);
        return;
    }

    console.log(`started listening on port ${port}`);
});