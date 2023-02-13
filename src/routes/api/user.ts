import express, { Request, Response } from "express";
import { create, index, show } from "../../controllers/user";

const router = express.Router();

router.get("/", index);

router.get("/:id", show);

router.post("/", create);

export default router;