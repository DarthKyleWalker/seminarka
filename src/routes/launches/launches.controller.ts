import { Request, Response } from "express";
import getPagination from "../../services/query";
import LaunchService from "./launches.service";

class LaunchesController {
  static async httpGetLaunches(req: Request, res: Response) {
    const { skip, limit } = getPagination(req.query);
    const launches = await LaunchService.getAllLaunches(skip, limit);
    return res.status(200).json(launches);
  }

  static async httpAddLaunch(req: Request, res: Response) {
    const launch = req.body;

    if (
      !launch.mission ||
      !launch.rocket ||
      !launch.launchDate ||
      !launch.target
    ) {
      return res.status(400).json({
        error: "Missing required launch property.",
      });
    }

    const savedLaunch = await LaunchService.addNewLaunch(launch);

    return res.status(201).json(savedLaunch);
  }

  static async httpGetLaunch(req: Request, res: Response) {
    const launch = await LaunchService.getOneLaunch(req.params.id);

    if (!launch) {
      return res
        .status(404)
        .json({ error: "Launch with that ID does not exist." });
    }

    return res.status(200).json(launch);
  }

  static async httpUpdateLaunch(req: Request, res: Response) {
    const launch = await LaunchService.updateLaunch(req.params.id, req.body);

    if (!launch) {
      return res
        .status(404)
        .json({ error: "Launch with that ID does not exist." });
    }

    return res.status(200).json(launch);
  }

  static async httpDeleteLaunch(req: Request, res: Response) {
    const launch = await LaunchService.deleteLaunch(req.params.id);

    return res.status(200).json(launch);
  }
}

export default LaunchesController;
