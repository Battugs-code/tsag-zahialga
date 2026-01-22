import { Document } from "mongoose";

interface ITimeManage {
  startTime: Date;
  endTime: Date;
  username: string;
  services: String;
}
export interface ITimeManageInput {
  startTime: Date;
  endTime: Date;
  username: string;
  services: string;
}
export interface ITimeManageDocument extends ITimeManage, Document {}
