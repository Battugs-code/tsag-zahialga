import {
  TimeDefs,
  queryDefs,
  mutationDefs,
} from "./backend/timeManage/graphql/schema.ts";
export const typeDefs = `
    ${TimeDefs}

    type Query{
        ${queryDefs}
    }
    
    type Mutation{
        ${mutationDefs}
    }
`;
export const resolvers = {
  Query: {},
  Mutation: {},
};
