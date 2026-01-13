import { TimeDefs } from "./backend/timeManage/graphql/schema";

export const typeDefs = `
${TimeDefs}
`;
export const resolvers = {
  Query: {},
  Mutation: {},
};
