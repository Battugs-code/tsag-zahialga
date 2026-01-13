import { Document } from "mongoose";

interface ITimeManage {
  startTime: number;
  EndTime: number;
  username: string;
}
export interface ITimeManageDocument extends ITimeManage, Document {}
