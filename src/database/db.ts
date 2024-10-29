import mongoose from "mongoose";

export const mongoConnect = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/graphql", { dbName: "graphQl" })
    .then(() => console.log(" DataBase connected"))
    .catch(() => console.log("error in DB"));
};
