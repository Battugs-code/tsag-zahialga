import {
  TimeDefs,
  timeMutationDefs,
  timeQueryDefs,
} from "./backend/timeManage/graphql/schema.ts";
import { TimeManageMutation } from "./backend/timeManage/graphql/mutation.ts";

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
  Query: {},
  Mutation: {
    ...TimeManageMutation,
  },
};
