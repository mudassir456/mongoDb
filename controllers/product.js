let path = require("path");
let Products = require("../models/product");
const { Types } = require("mongoose");
 
module.exports ={
    get :async function(req,res){
       try{
        let products =await  Products.find({});
        res.send({products})
       }catch (err){
        console.log(err);
        res.send("error found")
       }
    },
    post :async function(req,res){
       try{
        let {name, price} = req.body;
        let products = await Products.create({
            _id :new Types.ObjectId(),
            name : name,
            price : price
        })
        res.send({products})
       }catch (error){
        console.log(error);
        res.send("errorr")
       }
    },
    put :async function(req,res){
      try{
        let {name,price} = req.body
        const {userid}= req.params;
        // userid = Number(userid); 
       let products = await Products.updateOne({
        _id :userid
       },{
            name : name,
            price : price
        })
        res.send({products})
      }catch (err){
        console.log(err)
      }
    },
    delete :function(req,res){
        let {name,price} = req.body
        let {userid} = req.params;
        userid = Number(userid);
        products.splice(userid,1)
        res.send("delete method done")
    }
}