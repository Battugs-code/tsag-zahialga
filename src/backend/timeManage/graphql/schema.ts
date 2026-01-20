export const TimeDefs = `
scalar Date
type TimeManage{
startTime:Date!
endTime:Date!
username:String!
services:String!
}
input TimeManageInput{
startTime:String!
endTime:String!
username:String!
services:String!
}
input updateTimeInput{
startTime:String
endTime:String
services:String
}
`;
export const timeMutationDefs = `
createTimeManage(input:TimeManageInput):TimeManage
updateTime(username:String!,input:updateTimeInput):TimeManage
cancelTime(username:String!):TimeManage
`;

export const timeQueryDefs = `
availableTimes(services:String!,date:String!):[TimeManage!]
allTimes:[TimeManage!]
filterTimes(username:String!,services:String!):[TimeManage]
`;
