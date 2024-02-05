import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/auth.utils.js";
const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  //  console.log(username)
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
   next(errorHandler(400,"All field is required."))
  }
  const hashPwd = bcrypt.hashSync(password, 10);
  const user = new User({ username, email, password: hashPwd });
  try {
    await user.save();
    res.status(200).json("succesfully signup.");
  } catch (error) {
    next(error);
  }
};
export default signup;
