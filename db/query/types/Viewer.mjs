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

const GraphQLViewerType = new GraphQLObjectType({
  name: "Viewer",
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField("Viewer"),
    serviceRequests: {
      type: ServiceRequestConnection,
      args: { ...connectionArgs },
      resolve: async (_, { ...args }) => {
        const serviceRequests = await prisma.serviceRequest.findMany({
          skip: args?.after || undefined,
          first: args?.first || undefined,
        });

        return connectionFromArray(serviceRequests, args);
      },
    },
  }),
});

export default GraphQLViewerType;
