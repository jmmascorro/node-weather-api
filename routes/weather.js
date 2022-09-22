import Router from "express";
import bodyParser from "body-parser";
import { addWeather, getWeather } from "../controllers/weatherController.js";

const router = Router();

router.get("/", (req, res) => getWeather(req, res));

router.post("/", (req, res) => addWeather(req, res));

export default router;
