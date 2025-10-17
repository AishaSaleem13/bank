import express from "express"
import cors from "cors"
import mainrouter from "./Routes/mainindex.mjs"

 const app = express()
 app.use(express.json())
app.use(cors())
app.use("/",mainrouter)

 export default app