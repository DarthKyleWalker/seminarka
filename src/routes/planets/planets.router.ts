import { Router } from "express";
import PlanetsController from "./planets.controller";

const planetsRouter = Router();

planetsRouter
  .route("/")
  .get(PlanetsController.httpGetPlanets)
  .post(PlanetsController.httpAddPlanet);
planetsRouter
  .route("/:id")
  .get(PlanetsController.httpGetPlanet)
  .put(PlanetsController.httpUpdatePlanet)
  .delete(PlanetsController.httpDeletePlanet);

export default planetsRouter;
