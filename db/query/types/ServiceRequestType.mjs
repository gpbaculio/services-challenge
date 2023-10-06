import { GraphQLObjectType, GraphQLString } from "graphql";
import {
  connectionDefinitions,
  fromGlobalId,
  globalIdField,
  nodeDefinitions,
} from "graphql-relay";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const { nodeInterface, nodeField } = nodeDefinitions(
  async (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    if (type === "ServiceRequest") {
      return await prisma.serviceRequest.findUnique({ where: { id } });
    } else {
      return null;
    }
  },
  (obj) => {
    // definitely a service request if valid
    if (obj?.servicetype) {
      return ServiceRequestType;
    } else {
      return null;
    }
  }
);

const ServiceRequestType = new GraphQLObjectType({
  name: "ServiceRequest",
  fields: {
    id: globalIdField("ServiceRequest"),
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
