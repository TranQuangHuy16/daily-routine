import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGDO_CONNECCTION_STRING);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed");
    process.exit(1);
  }
};
