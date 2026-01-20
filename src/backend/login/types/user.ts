import { Document } from "mongoose";
export interface IUser {
  email: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
}

export interface IUserDocument extends IUser, Document {}
