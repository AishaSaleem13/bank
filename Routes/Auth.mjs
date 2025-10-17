import { get,register,login,logout} from "../Controllers/auth.mjs";
import verifyToken from "../Middlewares/verifytoken.mjs";
import express from "express"

const router = express.Router()
router.get("/",get)
router.post("/login",login)
router.post("/signup",register)
router.put("/logout",verifyToken,logout)
export default router