import express from "express";
const router = express.Router();
import asyncHandler from "../middleware/asyncHandler.js";
import Animal from "../models/animalModel.js"; 

router.get("/", asyncHandler(async (req, res) => {
    const animals = await Animal.find({});
    res.json(animals);
}));

export default router;
