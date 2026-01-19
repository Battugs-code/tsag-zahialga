// import { Document } from "mongoose";

<<<<<<< HEAD
// interface ITimeManage {
//   startTime: number;
//   EndTime: number;
//   username: string;
// }
// export interface ITimeManageDocument extends ITimeManage, Document {}
=======
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
>>>>>>> cbf4c7058a76f5bc167392738406eb7b6009c87e
