import mongoose from "mongoose";
import { Schema } from "mongoose";
const bankSchema=Schema({
FullName:{
type:String,
required:true
},
Cards:{
type:Number,
required:true
},
CardDetails:[
    {
        card:{type:String,required:true},
        balance:{type:String,required:true}
    }
]



})

 const  Banks = mongoose.model("Banks",bankSchema)
export default Banks