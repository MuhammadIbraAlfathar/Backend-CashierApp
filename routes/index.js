import express from "express";
import categories from "./categories";
import products from "./products";

var router = express.Router();

router.use("/categories", categories);
router.use("/products", products);

export default router;
