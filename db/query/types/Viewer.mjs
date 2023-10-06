import { GraphQLObjectType } from "graphql";
import {
  connectionArgs,
  connectionFromArray,
  globalIdField,
} from "graphql-relay";
import { PrismaClient } from "@prisma/client";

import {
  ServiceRequestConnection,
  nodeInterface,
} from "./ServiceRequestType.mjs";

const prisma = new PrismaClient();

// fields under viewer are data that requires authentication
const GraphQLViewerType = new GraphQLObjectType({
  name: "Viewer",
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField("Viewer"),
    // this field are requests for services that is offered
    serviceRequests: {
      type: ServiceRequestConnection,
      args: { ...connectionArgs },
      resolve: async (_, { ...args }) => {
        const serviceRequests = await prisma.serviceRequest.findMany();
        // https://github.com/graphql/graphql-relay-js/issues/94#issuecomment-232410564
        return connectionFromArray(serviceRequests, args);
      },
    },
  }),
});

export default GraphQLViewerType;
