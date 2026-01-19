import { ITimeManageInput } from "../types/time.ts";
import { TimeManage } from "../db/time.ts";

export const TimeManageMutation = {
  createTimeManage: async (
    _root: any,
    { input }: { input: ITimeManageInput },
    context: any
  ) => {
    const { startTime, endTime, username, services } = input;
    const newTime = new TimeManage({
      startTime: new Date(startTime).getTime(),
      endTime: new Date(endTime).getTime(),
      username,
      services,
    });
    return await newTime.save();
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

    return await TimeManage.findOneAndUpdate(
      { username },
      { $set: updateData },
      { new: true }
    );
  },
  cancelTime: async (
    _root: any,
    { username }: { username: string },
    context: any
  ) => {
    return await TimeManage.findOneAndDelete({ username });
  },
};
