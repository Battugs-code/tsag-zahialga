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
  },
};
