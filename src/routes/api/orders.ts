import express from "express";
import { completed, index } from "../../controllers/orders";
import verifyToken from "../../utils/verifyToken";

const router = express.Router();

router.get("/:id", verifyToken, index);

router.get("/completed/:id", verifyToken, completed);

export default router;