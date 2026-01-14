export const TimeDefs = `
scalar Date

type TimeManage{
startTime:Date!
endTime:Date!
username:String!
services:String!
}
input TimeManageInput{
startTime:Date!
endTime:Date!
username:String!
services:String!
}
input updateTimeInput{
startTime:Date
endTime:Date
services:String
}
`;
export const timeMutationDefs = `
createTimeManage(input:TimeManageInput):TimeManage
updateTime(username:String!,input:updateTimeInput):TimeManage
cancelTime(username:String!):TimeManage
`;

export const timeQueryDefs = `
allTimes:[TimeManage]
filterTimes(username:String!):[TimeManage]


`;