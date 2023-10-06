import { GraphQLObjectType, GraphQLString } from "graphql";
import { connectionDefinitions, globalIdField } from "graphql-relay";

import { nodeInterface } from "./definitions.mjs";

export const SERVICE_REQUEST_TYPE = "ServiceRequest";

export const ServiceRequestType = new GraphQLObjectType({
  name: SERVICE_REQUEST_TYPE,
  interfaces: [nodeInterface],
  fields: {
    id: globalIdField(SERVICE_REQUEST_TYPE),
    customerName: {
      type: GraphQLString,
      resolve: ({ customerName }) => customerName,
    },
    serviceType: {
      type: GraphQLString,
      resolve: ({ serviceType }) => serviceType,
    },
    status: {
      type: GraphQLString,
      resolve: ({ status }) => status,
    },
    scheduledDate: {
      type: GraphQLString,
      resolve: ({ scheduledDate }) => scheduledDate,
    },
    contactInfo: {
      type: GraphQLString,
      resolve: ({ contactInfo }) => contactInfo,
    },
  },
});

export const {
  connectionType: ServiceRequestConnection,
  edgeType: GraphQLServiceRequestEdge,
} = connectionDefinitions({
  name: SERVICE_REQUEST_TYPE,
  nodeType: ServiceRequestType,
});

export const ADMIN_TYPE = "Admin";

export const AdminType = new GraphQLObjectType({
  name: ADMIN_TYPE,
  interfaces: [nodeInterface],
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
  //
});

export const { connectionType: AdminConnection, edgeType: GraphQLAdminEdge } =
  connectionDefinitions({
    name: ADMIN_TYPE,
    nodeType: AdminType,
  });
