import express from "express";
import { getCountries, createCountry, deleteCountry } from "../controllers/countryController.js";

const router = express.Router();

router.get("/", getCountries);
router.post("/", createCountry);
router.delete("/:id", deleteCountry);

export default router;
