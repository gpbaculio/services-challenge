// external imports
import { GraphQLObjectType } from "graphql";

import GraphQLViewerType from "./types/Viewer.mjs";
import { nodeField } from "./types/ServiceRequestType.mjs";

const query = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    viewer: {
      type: GraphQLViewerType,
      resolve: (root, args, context) => {
        return "mock viewer";
        // Check if the user is authenticated
        // if (!context?.user) {
        //   return null;
        // }

        // Return the authenticated user
        // return context?.user;
      },
    },
    node: nodeField,
  }),
});

export default query;
