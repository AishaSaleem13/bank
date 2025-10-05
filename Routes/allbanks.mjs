import { getallbanks,postallbanks } from "../Controllers/allbanks.mjs";
import express from "express";
import upload from "../Middlewares/upload.mjs";
const router =express.Router()

router.get("/",getallbanks)
router.post("/post",upload.single("image"),postallbanks)
export default router