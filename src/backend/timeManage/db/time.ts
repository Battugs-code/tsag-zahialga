// import mongoose, { model, Schema } from "mongoose";
// import { ITimeManageDocument } from "../types/time.ts";

<<<<<<< HEAD
// const TimeManageSchema = new Schema({
//   startTime: { type: Number, required: true },
//   endTime: { type: Number, required: true },
//   username: { type: String, required: true },
// });
=======
const TimeManageSchema = new Schema({
  startTime: { type: Number, required: true },
  endTime: { type: Number, required: true },
  username: { type: String, required: true },
  services: { type: String, required: true },
});
>>>>>>> cbf4c7058a76f5bc167392738406eb7b6009c87e

// export const TimeManage = mongoose.model<ITimeManageDocument>(
//   "TimeManage",
//   TimeManageSchema
// );
