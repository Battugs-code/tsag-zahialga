
import mongoose from "mongoose";
import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";
import { typeDefs, resolvers } from "./apolloServer.ts";
mongoose
  .connect(
    "mongodb+srv://Achka1121:QrPqkWmvZrs2v835@backend-lesson.zrskizs.mongodb.net/Booking_system?appName=backend-lesson"
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error", err);
  });
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const { url } = await startStandaloneServer(server, {
  listen: { port: 6900 },
});
console.log(`Server ready at: ${url}`);
