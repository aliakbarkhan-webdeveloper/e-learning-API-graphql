import { userModel } from "../models/userModel.js";
export const getUsers = async () => {
  const users = await userModel.find();
  console.log(users);
  console.log("request from user controller");
  
  return users;
};
