// external imports
import { GraphQLObjectType } from "graphql";
// local imports
import createServiceRequest from "./createServiceRequest.mjs";
import createUser from "./createUser.mjs";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createServiceRequest,
    createUser,
  },
});

export default mutation;
