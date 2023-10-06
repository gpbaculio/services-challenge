import { GraphQLObjectType, GraphQLString } from "graphql";
import { globalIdField } from "graphql-relay";

import { nodeInterface } from "./definitions.mjs";

export const ADMIN_TYPE = "Admin";

const AdminType = new GraphQLObjectType({
  name: ADMIN_TYPE,
  fields: {
    id: globalIdField(ADMIN_TYPE),
    name: {
      type: GraphQLString,
      resolve: ({ name }) => name,
    },
    email: {
      type: GraphQLString,
      resolve: ({ email }) => email,
    },
    createdAt: {
      type: GraphQLString,
      resolve: ({ createdAt }) => createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: ({ updatedAt }) => updatedAt,
    },
  },
  interfaces: [nodeInterface],
});

export const { connectionType: AdminConnection, edgeType: GraphQLAdminEdge } =
  connectionDefinitions({
    name: ADMIN_TYPE,
    nodeType: AdminType,
  });

export default AdminType;
