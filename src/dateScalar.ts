import { GraphQLScalarType, Kind } from "graphql";
export const DateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Custom Date scalar as ISO string",
  parseValue(value: unknown): Date {
    return new Date(value as string);
  },

  serialize(value: unknown): string {
    if (value instanceof Date) {
      return value.toISOString();
    }
    throw new Error("DateScalar can only serialize Date objects");
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value);
    }
    return null;
  },
});
