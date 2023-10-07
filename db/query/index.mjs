// external imports
import { GraphQLObjectType } from "graphql";

import GraphQLViewerType from "./types/Viewer.mjs";

import { PrismaClient } from "@prisma/client";
import { nodeField } from "./types/definitions.mjs";

export const prisma = new PrismaClient();

const query = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    viewer: {
      type: GraphQLViewerType,
      resolve: (_root, _args, { user }) => {
        // mock user, ideally return user from context above
        return { id: "guest" };
      },
    },
    node: nodeField,
  }),
});

export default query;
