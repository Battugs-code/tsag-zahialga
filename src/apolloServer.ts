import {
  TimeDefs,
  timeMutationDefs,
  timeQueryDefs,
} from "./backend/timeManage/graphql/schema.ts";
import { TimeManageMutation } from "./backend/timeManage/graphql/mutation.ts";
import { timeQueryResolvers } from "./backend/timeManage/graphql/query.ts";
import { DateScalar } from "./dateScalar.ts";
import {
  loginTypesDefs,
  signupTypesDefs,
  userMutationTypeDefs,
} from "./backend/login/graphql/schema.ts";
import { userMutations } from "./backend/login/graphql/mutations.ts";
export const typeDefs = `
${loginTypesDefs}
${signupTypesDefs}
${TimeDefs}
type Query{
  ${timeQueryDefs}
}
type Mutation {
  ${userMutationTypeDefs}


  ${timeMutationDefs}
}`;

export const resolvers = {
  Date: DateScalar,
  Query: {
    ...timeQueryResolvers,
  },
  Mutation: {
    ...userMutations,
    ...TimeManageMutation,
    // ...timeMutationDefs
  },
};
