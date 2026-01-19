<<<<<<< HEAD
// import { TimeDefs } from "./backend/timeManage/graphql/schema.ts";
import {
  loginTypesDefs,
  signupTypesDefs,
  userMutationTypeDefs,
} from "./backend/login/graphql/schema.ts";
import { userMutations } from "./backend/login/graphql/mutations.ts";
// import { userQueries } from "./backend/login/graphql/queries.ts";

export const typeDefs = `

${loginTypesDefs}
${signupTypesDefs}

type Query {
  test: String
}

type Mutation {
${userMutationTypeDefs}

}
`;
export const resolvers = {
  Query: {
    test: async () => {
      return "test";
    },
  },
  Mutation: {
    ...userMutations,
=======
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
>>>>>>> cbf4c7058a76f5bc167392738406eb7b6009c87e
  },
};
