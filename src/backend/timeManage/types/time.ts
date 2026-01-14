import { Document } from "mongoose";

interface ITimeManage {
<<<<<<< HEAD
  startTime: Date;
  endTime: Date;
=======
  startTime: number;
  endTime: number;
>>>>>>> cbf4c7058a76f5bc167392738406eb7b6009c87e
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
