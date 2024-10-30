import { userModel } from "../models/userModel.js";
export const getUsers = async () => {
  const users = await userModel.find();
  console.log(users);
  return users;
};
