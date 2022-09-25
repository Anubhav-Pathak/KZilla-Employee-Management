import express from "express";
import {getEditEmployee, getAddEmployee, getHome, postAddEmployee, postEditEmployee, postDeleteEmployee } from "../controllers/admin.mjs"
const router = express.Router();
router.post("/delete", postDeleteEmployee);
router.get("/edit/:empId", getEditEmployee);
router.post("/edit",postEditEmployee);
router.get("/add", getAddEmployee);
router.post("/add", postAddEmployee);
router.get("/", getHome);
export default router;