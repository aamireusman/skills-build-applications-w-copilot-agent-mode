import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017/octofit";

mongoose
  .connect(mongoUri)
  .then(() => console.log("Connected to MongoDB on port 27017"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.get("/", (req, res) => {
  res.json({ message: "OctoFit Tracker backend running on port 8000" });
});

export default app;
