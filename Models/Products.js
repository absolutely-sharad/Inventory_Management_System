const mongoose =require("mongoose");
const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true,
    }, productPrice:{
        type:Number,
        required:true,
    }, productbarcode:{
        type:Number,
        required:true,
    }
})
const product =mongoose.model("products",productSchema)
module.export=product;