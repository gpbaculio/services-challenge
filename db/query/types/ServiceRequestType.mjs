import { GraphQLObjectType, GraphQLString } from "graphql";
import {
  connectionDefinitions,
  fromGlobalId,
  globalIdField,
  nodeDefinitions,
} from "graphql-relay";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

const SERVICE_REQUEST_TYPE = "ServiceRequest";

export const { nodeInterface, nodeField } = nodeDefinitions(
  async (globalId) => {
    const { type, id } = fromGlobalId(globalId);

    if (type === SERVICE_REQUEST_TYPE) {
      const serviceRequest = await prisma.serviceRequest.findUnique({
        where: { id },
      });

      return serviceRequest;
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
