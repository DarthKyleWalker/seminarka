import getPagination from "../../services/query";
import PlanetService from "./planets.service";
import { Request, Response } from "express";

class PlanetsController {
  static async httpGetPlanets(req: Request, res: Response) {
    const { skip, limit } = getPagination(req.query);

    const planets = await PlanetService.getAllPlanets(skip, limit);

    return res.status(200).json(planets);
  }

  static async httpAddPlanet(req: Request, res: Response) {
    const planet = req.body;

    if (!planet.keplerName) {
      return res.status(400).json({
        error: "Missing required planet's property.",
      });
    }

    const savedPlanet = await PlanetService.addNewPlanet(planet);

    return res.status(201).json(savedPlanet);
  }

  static async httpGetPlanet(req: Request, res: Response) {
    const planet = await PlanetService.getOnePlanet(req.params.id);

    if (!planet) {
      return res
        .status(404)
        .json({ error: "Planet with that ID does not exist." });
    }

    return res.status(200).json(planet);
  }

  static async httpUpdatePlanet(req: Request, res: Response) {
    const planet = await PlanetService.updatePlanet(req.params.id, req.body);

    if (!planet) {
      return res
        .status(404)
        .json({ error: "Planet with that ID does not exist." });
    }

    return res.status(200).json(planet);
  }

  static async httpDeletePlanet(req: Request, res: Response) {
    const planet = await PlanetService.deletePlanet(req.params.id);

    if (!planet) {
      return res
        .status(404)
        .json({ error: "Planet with that ID does not exist" });
    }

    return res.status(200).json(planet);
  }
}

export default PlanetsController;
