import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./libs/db.js";
import authRoute from "./routes/AuthRoute.js";
import userRouter from "./routes/userRoute.js";
import cookiesParser from "cookie-parser";
import { protectedRoute } from "./middlewares/authMiddleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use(cookiesParser());
// public routes
app.use("/api/auth", authRoute);
// private routes
app.use(protectedRoute);
app.use("/api/users", userRouter);
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server bắt đầu trên công ${PORT}`);
  });
});
