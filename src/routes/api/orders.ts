import express from "express";
import { completed, create, index } from "../../controllers/orders";
import verifyToken from "../../utils/verifyToken";

const router = express.Router();

router.get("/:id", verifyToken, index);

router.get("/completed/:id", verifyToken, completed);

router.post("/",  create);

export default router;