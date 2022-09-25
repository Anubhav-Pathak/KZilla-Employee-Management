import express from "express";
import {getLogin, getHome, postLogin} from "../controllers/client.mjs"
const router = express.Router();
router.get("/login", getLogin);
router.post("/login", postLogin);
router.get("/", getHome);
export default router;