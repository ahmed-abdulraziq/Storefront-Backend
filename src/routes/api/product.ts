import express from "express";
import { create, index, show } from "../../controllers/product";
import verifyToken from "../../utils/verifyToken";

const router = express.Router();

router.get("/", index);

router.get("/:id", show);

router.post("/", verifyToken, create);

export default router;