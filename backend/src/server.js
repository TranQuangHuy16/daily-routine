import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./libs/db.js";
import authRoute from "./routes/AuthRoute.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// middleware
app.use(express.json());

// public routes
app.use("/api/auth", authRoute);
// private routes
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server bắt đầu trên công ${PORT}`);
  });
});
