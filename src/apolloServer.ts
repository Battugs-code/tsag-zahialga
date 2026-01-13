import {
  TimeDefs,
  queryDefs,
  mutationDefs,
} from "./backend/timeManage/graphql/schema.ts";
import { queries } from "./backend/timeManage/graphql/query.ts";
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
  Query: { ...queries },
  Mutation: {},
};
