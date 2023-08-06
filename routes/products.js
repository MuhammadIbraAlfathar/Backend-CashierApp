import { index, store } from "../controllers/CategoryController";
var express = require("express");
var router = express.Router();

/* GET users listing. */

router.get("/", index);
router.post("/", store);

export default router;
