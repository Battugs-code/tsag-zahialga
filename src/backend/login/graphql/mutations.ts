import { Users } from "../db/models.ts";
import { type IUser } from "../types/user.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { type IContext } from "../../../index.ts";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET;

export const userMutations = {
  loginUser: async (_root: any, { input }: { input: IUser }) => {
    let { email, password } = input;
    const data = await Users.findOne({
      email,
    });
    if (!data) {
      return "Hereglegch Burtgelgui";
    }
    const pass = await bcrypt.compare(password, data.password);
    if (!pass) {
      return "email or password is wrong";
    }

    const token = jwt.sign(
      {
        username: data.username,
        email: data.email,
        firstname: data.firstname,
        lastname: data.lastname,
      },
      SECRET_KEY!,
      { expiresIn: "1h" }
    );
    console.log(token);
    return {
      message: "Amjilttai nevterlee",
      token,
    };
  },

  signupUser: async (_root: any, { input }: { input: IUser }) => {},
};
