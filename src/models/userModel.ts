import { watch } from "fs";
import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    googleId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, enum: ["male", "female"] },
    avatar: { type: String },
    verified: { type: Boolean, default: true },
    watching: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Course",
      },
    ],
    watched: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Course",
      },
    ],
    role: {
      type: String,
      enum: ["user", "admin", "instructor"],
      default: "user",
    },
    verificationToken: { type: String },
    verificationExpired: { type: Date },

    passwordResetToken: { type: String },
    passwordResetExpire: { type: Date },
  },
  {
    timestamps: true,
  }
);

export const userModel = mongoose.model("users", schema);
