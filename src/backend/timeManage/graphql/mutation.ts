import { ITimeManageInput } from "../types/time.ts";
import { TimeManage } from "../db/time.ts";

export const TimeManageMutation = {
  createTimeManage: async (
    _root: any,
    { input }: { input: ITimeManageInput },
    context: any
  ) => {
    const { startTime, endTime, username, services } = input;
    const checkUsername = await TimeManage.findOne({ username });
    if (checkUsername) {
      return "Username already exists";
    }
    const newTime = new TimeManage({
      startTime: startTime,
      endTime: endTime,
      username,
      services,
    });
    await newTime.save();
    return "success";
  },
  updateTime: async (
    _root: any,
    { username, input }: { username: string; input: Partial<ITimeManageInput> },
    context: any
  ) => {
    const updateData: any = { ...input };
    if (input.startTime) {
      updateData.startTime = new Date(input.startTime).getTime();
    }
    if (input.endTime) {
      updateData.endTime = new Date(input.endTime).getTime();
    }

    await TimeManage.findOneAndUpdate(
      { username },
      { $set: updateData },
      { new: true }
    );
    return "success";
  },
  cancelTime: async (
    _root: any,
    { username }: { username: string },
    context: any
  ) => {
    await TimeManage.findOneAndDelete({ username });
    return "success";
  },
};
