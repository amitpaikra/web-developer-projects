const express  = require("express");
// const { rmSync } = require("fs");
const path = require("path");
const port = 7000;
const db = require("./config/mongoose");
const Contact = require("./models/contact");

const app = express();//now app const variable has all functionality of express

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());//using middleware
app.use(express.static("assets"));


let contactList = [
    {name : "amitpaikra", phone: "123456"},
    {name : "gopalsingh", phone: "23455"},
    {name : "nothing", phone:"234"}

]

app.get('/', (req, res)=>{
    //query ex: {name : "amit"}, function(err, contacts)
    Contact.find({}, function(err, contacts){
        if(err){
            console.error(console, "error on fetching data");
            return;
        }
        
        return res.render("home", { 
            title:"my contact list",
            contact_list:contacts
        });

    })


    
});

app.post('/contact-list',(req, res)=>{
    // console.log(req)
    // contactList.push({   
    //     name:req.body.name,
    //     phone_number:req.body.phone_number
    // });

    Contact.create({
        name:req.body.name,
        phone:req.body.phone
    }, function(err, newContact){
        if(err){
            console.log("error on creating... into db")
            return;
        }
        console.error(console, "*************", newContact);
    });

    // contactList.push(req.body);
    return res.redirect("back");
});

app.listen(port, function(err){
    if( err ){
        console.log("error occured on ", port);
        return;
    }

    console.log("server started listening on ", port);
});