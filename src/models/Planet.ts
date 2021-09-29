import mongoose from "mongoose";

const planetSchema = new mongoose.Schema(
  {
    keplerName: {
      type: String,
      required: true,
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

export default mongoose.model("Planet", planetSchema);
