import "dotenv/config";
import express from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import api from "./routes/api";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

app.use("/v1", api);

app.all("*", (req, res) => {
  return res.status(404).json({ error: "This endpoint does not exist." });
});

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI has to be defined!");
}

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
  });
});
