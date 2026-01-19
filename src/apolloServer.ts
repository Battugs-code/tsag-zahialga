import {
  loginTypesDefs,
  signupTypesDefs,
  userMutationTypeDefs,
} from "./backend/login/graphql/schema.ts";



import { userMutations } from "./backend/login/graphql/mutations.ts";

export const typeDefs = `
${loginTypesDefs}
${signupTypesDefs}



type Query{
  _empty: String
}

type Mutation {
  ${userMutationTypeDefs}

}`

export const resolvers = {
  Mutation: {
    ...userMutations,
    // ...timeMutationDefs
  }
}