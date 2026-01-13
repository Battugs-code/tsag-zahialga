export const TimeDefs = `
    scalar Date
    type TimeDef{
        startTime:Date!
        endTime:Date!
        username:String!
    }
    type ReturnTimeDef{
        startTime:Date!
        endTime:Date!
    }
`;
export const mutationDefs = `
createTimeManage(startTime:Int!,endTime:Int!,username:String!):TimeDef!
`;

export const queryDefs = `
allTimes(username:String!):[ReturnTimeDef]
filterTimes(startTime:Int!,endTime:Int!,username:String!):[ReturnTimeDef]
`;
