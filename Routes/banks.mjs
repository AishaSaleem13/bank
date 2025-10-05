import express from "express";
import { getbank,postbank,idbank,deletebank} from "../Controllers/banks.mjs";

const router=express.Router()

router.get("/",getbank)
router.post("/post",postbank)
router.get("/bank/:id",idbank)
router.delete("/:id",deletebank)
export default router