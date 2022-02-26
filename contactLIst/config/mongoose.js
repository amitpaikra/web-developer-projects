//require the library
const mongoose = require('mongoose');

//connecto to a database
mongoose.connect("mongodb://localhost/contacts_list_db");

//acquire the connection( to check if it is successful or not)
const db = mongoose.connection


//error show
db.on("error", console.error.bind(console, "error on connecting the database") );

//up and running the print the message
db.once("open", function(){
    console.log("Succesfully connect to db");
});