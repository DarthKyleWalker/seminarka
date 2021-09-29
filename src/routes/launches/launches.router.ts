import { Router } from "express";
import LaunchesController from "./launches.controller";

const launchesRouter = Router();

launchesRouter
  .route("/")
  .get(LaunchesController.httpGetLaunches)
  .post(LaunchesController.httpAddLaunch);
launchesRouter
  .route("/:id")
  .get(LaunchesController.httpGetLaunch)
  .put(LaunchesController.httpUpdateLaunch)
  .delete(LaunchesController.httpDeleteLaunch);

export default launchesRouter;
