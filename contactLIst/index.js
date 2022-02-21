const express  = require("express");
const { rmSync } = require("fs");
const path = require("path");
const port = 8000;
const app = express();//now app const variable has all functionality of express

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());//using middleware
app.use(express.static("assets"));
// app.use(function (req, res, next ){
//     console.log("middlerware 1");
//     next();
// });

// app.use(function (req, res, next){
//     console.log("middleware 2");
//     next();

// });

let contactList = [
    {name : "amitpaikra", phone_number: "123456"},
    {name : "gopalsingh", phone_number: "23455"},
    {name : "nothing", phone_number:"nothing else"}

]

app.get('/', (req, res)=>{
    return res.render("home", { 
        title:"my contact list",
        contact_list:contactList
    })
    
});

app.post('/contact-list',(req, res)=>{
    // console.log(req)
    contactList.push({
        name:req.body.name,
        phone_number:req.body.phone_number
    });
    contactList.push(req.body);
    return res.redirect("back");
});

app.listen(port, function(err){
    if( err ){
        console.log("error occured on ", port);
        return;
    }

    console.log("server started listening on ", port);
});