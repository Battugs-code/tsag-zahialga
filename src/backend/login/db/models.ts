import { Schema, model } from "mongoose";
import { type IUserDocument } from "../types/user.ts";

const UserSchema: Schema<IUserDocument> = new Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
});

export const Users = model<IUserDocument>("user", UserSchema);
