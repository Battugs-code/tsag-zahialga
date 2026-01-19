import { Users } from "../db/models.ts";
import { type IUser } from "../types/user.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { tokenToString } from "typescript";
import { Token } from "graphql";
// import { type IContext } from "../../../index.ts";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET;

export const userMutations = {
  loginUser: async (_root: any, { input }: { input: IUser }) => {
    let { email, password } = input;
    const alldata = await Users.find({});
    const data = await Users.findOne({
      email,
    });
    if (!data) {
      return {
        message: "User not registered",
        token: null,
      };
    }

    // console.log(data);
    // console.log(alldata);
    const pass = await bcrypt.compare(password, data.password);
    if (!pass) {
      return {
        message: "email or password is wrong!",
        token: null,
      };
    }

    const token = jwt.sign(
      {
        username: data.username,
        email: data.email,
        firstname: data.firstname,
        lastname: data.lastname,
      },
      SECRET_KEY!,
      { expiresIn: "1h" },
    );
    // console.log(data.username);

    return {
      message: "Amjilttai nevterlee",
      token,
    };
  },

  signupUser: async (_root: any, { input }: { input: IUser }) => {
    let { email, username, password, firstname, lastname } = input;
    const hashedPassword = await bcrypt.hash(password, 10);

    const check = await Users.findOne({
      email: email,
    });

    if (check) {
      return "email is already signed up";
    }

    const user = await Users.create({
      username,
      email,
      password: hashedPassword,
      firstname,
      lastname,
    });

    return {
      message: "Signup successful",
    };
  },
};
