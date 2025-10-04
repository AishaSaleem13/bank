import {mongourl} from "./environment.mjs"
import mongoose from "mongoose"

mongoose.connect(mongourl)
 export default mongoose