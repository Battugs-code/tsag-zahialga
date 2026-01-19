import { Users } from "../db/models.ts";

export const userQueries = {
  userDetail: async (_root: undefined, { _id }: { _id: string }) => {
    const user = await Users.findOne({ _id });

    console.log(user);

    return user;
  },
};
