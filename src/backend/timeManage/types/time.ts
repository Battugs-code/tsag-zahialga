import { Document } from "mongoose";

interface ITimeManage {
  startTime: Date;
  EndTime: Date;
  username: string;
}
export interface ITimeManageDocument extends ITimeManage, Document {}
