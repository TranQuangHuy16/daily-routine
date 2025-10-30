import bcrypt from "bcrypt";
import User from "../models/User.js";

export const signUp = async (req, res) => {
  try {
    const { username, password, email, firstName, lastName } = req.body;

    if (!username || !password || !email || !firstName || !lastName) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // kiểm tra user tồn tại chưa
    const duplicate = await User.findOne({ username });

    if (duplicate) {
      return res.status(409).json({ message: "Username đã tồn tại" });
    }
    // mã hóa pass
    const hashedPassword = await bcrypt.hash(password, 10);

    // tạo user mới
    await User.create({
      username,
      hashedPassword,
      email,
      displayName: `${firstName} ${lastName}`,
    });

    // return
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
