const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        requred:true
    },

    phone:{
        type:Number,
        requred:true
    }
});

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;