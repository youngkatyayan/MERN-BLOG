import User from "../models/user.models.js";
const signup =async (req, res) => {
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
    res.json("All field is required.");
  }

  const user = new User({ username, email, password });
  try {
  await user.save()
    res.status(200).json("succesfully signup.")
  } catch (error) {
    console.log(error)
  }
};
export default signup;
