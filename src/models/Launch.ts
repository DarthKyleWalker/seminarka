import mongoose from "mongoose";

const launchesSchema = new mongoose.Schema(
  {
    launchDate: {
      type: Date,
      required: true,
    },
    mission: {
      type: String,
      required: true,
    },
    rocket: {
      type: String,
      required: true,
    },
    target: {
      type: String,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export default mongoose.model("Launch", launchesSchema);
