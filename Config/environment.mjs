import dotenv from "dotenv"
dotenv.config()

export const mongourl=process.env.MONGO_URI
export const jwtSecret=process.env.jwtSecret
 