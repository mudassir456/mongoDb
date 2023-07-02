const {Schema, Types, model} = require("mongoose");

let schema = new Schema({
    _id :{
        type : Types.ObjectId,
        required : true
    },
    name :{
        type : String,
        required : true
    },
    price :{
        type : Number,
        required : true
    },
    createdAt :{
        type : Date,
        required : true, 
        default : Date.now
    },
    updatedAt :{
        type : Date,
        required : true,
        default : Date.now
    }
})

module.exports = model("Product", schema)