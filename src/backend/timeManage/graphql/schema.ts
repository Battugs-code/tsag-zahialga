
export const TimeDefs = `
startTime:Int!
endTime:Int!
username:String!

`;
export const mutationDefs = `
createTimeManage(startTime:Int!,endTime:Int!,username:String!):TimeManage
`;

export const queryDefs = `
allTimes:TimeDefs[]
filterTimes(startTime:Int!,endTime:Int!):TimeDefs[]

export const TimeDefs = 
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
