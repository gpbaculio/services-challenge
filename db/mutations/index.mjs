// external imports
import { GraphQLObjectType } from "graphql";
// local imports
import createServiceRequest from "./createServiceRequest.mjs";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createServiceRequest,
  },
});

export default mutation;
