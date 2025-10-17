import express from "express";
import userroutes from "../Routes/Auth.mjs"
// import bankroutes from "../Routes/banks.mjs"
import allbankroutes from "../Routes/allbanks.mjs"

const routermain =express.Router()

routermain.use("/user",userroutes)
routermain.use("/allbanks",allbankroutes)
// mainrouter.use("/banks",bankroutes)



export default routermain