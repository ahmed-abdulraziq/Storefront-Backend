import express, { Request, Response } from "express";
import { create, index, show } from "../../controllers/user";
import verifyToken from "../../utils/verifyToken";

const router = express.Router();

router.get("/", verifyToken, index);

router.get("/:id", verifyToken, show);

router.post("/", create);

export default router;