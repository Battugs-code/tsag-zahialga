export const TimeDefs = `
    type TimeDef{
        startTime:Int!
        endTime:Int!
        username:String!
    }
    type TimeManage{
        time:String
    }
`;
export const mutationDefs = `
createTimeManage(startTime:Int!,endTime:Int!,username:String!):TimeDef!
editTimeManage(startTime:Int!,endTime:Int!,username:String!):TimeDef!
deleteTimeManage(startTime:Int!,endTime:Int!,username:String!):String!
`;

export const queryDefs = `
allTimes:[TimeDef]
filterTimes(startTime:Int!,endTime:Int!):[TimeDef]
`;
