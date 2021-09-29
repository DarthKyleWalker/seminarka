import Planet from "../../models/Planet";

interface PlanetPayload {
  keplerName: string;
}

class PlanetService {
  static getAllPlanets(skip: number, limit: number) {
    return Planet.find({}).skip(skip).limit(limit);
  }

  static addNewPlanet(planet: PlanetPayload) {
    return new Planet(planet).save();
  }

  static getOnePlanet(id: string) {
    return Planet.findById(id);
  }

  static async updatePlanet(id: string, body: PlanetPayload) {
    const planet = await this.getOnePlanet(id);

    if (!planet) {
      return false;
    }

    planet.set(body);

    return planet.save();
  }

  static async deletePlanet(id: string) {
    return Planet.findByIdAndDelete(id);
  }
}

export default PlanetService;
