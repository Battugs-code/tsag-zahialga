import { Document } from "mongoose";


interface ITimeManage {
  startTime: number;
  EndTime: number;
  username: string;
}
export interface ITimeManageDocument extends ITimeManage, Document {}

interface ITimeManage {
  startTime: number;
  endTime: number;
  username: string;
  services: String;
}
export interface ITimeManageInput {
  startTime: Date;
  endTime: Date;
  username: String;
  services: String;
}
export interface ITimeManageDocument extends ITimeManage, Document {}

