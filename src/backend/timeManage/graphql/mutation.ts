import { ITimeManageInput } from "../types/time.ts";
import { TimeManage } from "../db/time.ts";

export const TimeManageMutation = {
  createTimeManage: async (
    _root: any,
    { input }: { input: ITimeManageInput },
  ) => {
    const existingUser = await TimeManage.findOne({ username: input.username });
    if (existingUser) {
      throw new Error("Username already exists");
    }

    const newTime = await TimeManage.create(input);

    return newTime;
  },

  updateTime: async (
    _root: any,
    { username, input }: { username: string; input: Partial<ITimeManageInput> },
  ) => {
    const updated = await TimeManage.findOneAndUpdate(
      { username },
      { $set: input },
    );

    if (!updated) {
      throw new Error("User not found");
    }

    return updated;
  },

  cancelTime: async (_root: any, { username }: { username: string }) => {
    const deleted = await TimeManage.findOneAndDelete({ username });

    if (!deleted) {
      throw new Error("User not found");
    }

    return "success";
  },
};
