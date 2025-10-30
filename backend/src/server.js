import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// middleware
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server bắt đầu trên công ${PORT}`);
});
