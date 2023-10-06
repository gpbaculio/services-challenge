import { GraphQLObjectType, GraphQLString } from "graphql";
import { connectionDefinitions, globalIdField } from "graphql-relay";

import { nodeInterface } from "./definitions.mjs";

export const SERVICE_REQUEST_TYPE = "ServiceRequest";

const ServiceRequestType = new GraphQLObjectType({
  name: SERVICE_REQUEST_TYPE,
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
  interfaces: [nodeInterface],
});

export const {
  connectionType: ServiceRequestConnection,
  edgeType: GraphQLServiceRequestEdge,
} = connectionDefinitions({
  name: "ServiceRequest",
  nodeType: ServiceRequestType,
});

export default ServiceRequestType;
