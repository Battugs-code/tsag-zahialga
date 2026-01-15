import {
  TimeDefs,
  timeMutationDefs,
  timeQueryDefs,
} from "./backend/timeManage/graphql/schema.ts";
import { TimeManageMutation } from "./backend/timeManage/graphql/mutation.ts";
import { timeQueryResolvers } from "./backend/timeManage/graphql/query.ts";
import { DateScalar } from "./dateScalar.ts";
export const typeDefs = `
${TimeDefs}
type Query{
${timeQueryDefs}
}
type Mutation{
${timeMutationDefs}
}
`;
export const resolvers = {
  Date: DateScalar,
  Query: {
    ...timeQueryResolvers,
  },
  Mutation: {
    ...TimeManageMutation,
  },
};
