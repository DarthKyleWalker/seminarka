import { Router } from "express";
import planetsRouter from "./planets/planets.router";
import launchesRouter from "./launches/launches.router";

const api = Router();

api.use("/planets", planetsRouter);
api.use("/launches", launchesRouter);

export default api;
