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
  availableTimes: async (_: any, args: { services: string; date: string }) => {
    const startOfDay = new Date(`${args.date}T00:00:00.000Z`);
    const endOfDay = new Date(startOfDay);
    endOfDay.setUTCDate(endOfDay.getUTCDate() + 1);

    return TimeManage.find({
      services: args.services,
      startTime: { $lt: endOfDay },
      endTime: { $gte: startOfDay },
    });
  },
};
