import mongoose from "mongoose";
import { Schema } from "mongoose";

const banksSchema=Schema({

    image:{
        required:true,
        type:String
    },

    name:{
        required:true,
        type:String
    }
})

const AllBanks = mongoose.model("AllBanks",banksSchema)
export default AllBanks