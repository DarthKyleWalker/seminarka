import Launch from "../../models/Launch";

interface LaunchPayload {
  mission: string;
  launchDate: string;
  rocket: string;
  target: string;
}

class LaunchService {
  static getAllLaunches(skip: number, limit: number) {
    return Launch.find({}).skip(skip).limit(limit);
  }

  static addNewLaunch(launch: LaunchPayload) {
    return new Launch(launch).save();
  }

  static getOneLaunch(id: string) {
    return Launch.findById(id);
  }

  static async updateLaunch(id: string, body: LaunchPayload) {
    const launch = await this.getOneLaunch(id);

    if (!launch) {
      return false;
    }

    launch.set(body);

    return launch.save();
  }

  static async deleteLaunch(id: string) {
    return Launch.findByIdAndDelete(id);
  }
}

export default LaunchService;
