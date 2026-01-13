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


`;
