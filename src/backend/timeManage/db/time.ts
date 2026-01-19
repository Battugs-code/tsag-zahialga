import mongoose, { model, Schema } from "mongoose";
import { ITimeManageDocument } from "../types/time.ts";

const TimeManageSchema = new Schema({
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  username: { type: String, required: true },
  services: { type: String, required: true },
});

export const TimeManage = mongoose.model<ITimeManageDocument>(
  "timemanages",
  TimeManageSchema
);
