import { TimeManage } from "../db/time.ts";

export const queries = {
  allTimes: async (_: any) => {
    const times = await TimeManage.find();
    return times;
  },
  filterTimes: async (_: any, args: { username: string }) => {
    const times = await TimeManage.find(
      {
        username: args.username,
      },
      { startTime: 1, endTime: 1, _id: 0 }
    );
    return times;
  },
};
