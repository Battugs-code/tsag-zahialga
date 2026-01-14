import { Document } from "mongoose";

interface ITimeManage {
  startTime: Date;
  endTime: Date;
  username: string;
}
export interface ITimeManageDocument extends ITimeManage, Document {}
