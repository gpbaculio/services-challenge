import { GraphQLObjectType } from "graphql";

import createServiceRequest from "./createServiceRequest.mjs";
import createUser from "./createUser.mjs";
import loginUser from "./loginUser.mjs";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createServiceRequest,
    createUser,
    loginUser,
  },
});

export default mutation;
