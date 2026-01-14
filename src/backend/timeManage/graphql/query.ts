import { TimeManage } from "../db/time.ts";

export const timeQueryResolvers = {
  allTimes: async (_: any) => {
    const times = await TimeManage.find();
    return times;
  },
  filterTimes: async (_: any, args: { username: string; services: string }) => {
    const times = await TimeManage.find(
      {
        username: args.username,
        services: args.services,
      },
      { startTime: 1, endTime: 1, _id: 0, services: 1, username: 1 }
    );
    return times;
  },
};
