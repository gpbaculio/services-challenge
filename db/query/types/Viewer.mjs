import { GraphQLObjectType } from "graphql";
import {
  connectionArgs,
  connectionFromArray,
  globalIdField,
} from "graphql-relay";

import { ServiceRequestConnection, AdminConnection } from "./ViewerTypes.mjs";

import { prisma } from "../index.mjs";
import { nodeInterface } from "./definitions.mjs";

const VIEWER_TYPE = "Viewer";
// fields under viewer are data that requires authentication
const GraphQLViewerType = new GraphQLObjectType({
  name: VIEWER_TYPE,
  interfaces: [nodeInterface],
  fields: () => ({
    id: globalIdField(VIEWER_TYPE),
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
    admins: {
      type: AdminConnection,
      args: { ...connectionArgs },
      resolve: async (_, { ...args }) => {
        const admins = await prisma.user.findMany({ where: { type: "admin" } });

        return connectionFromArray(admins, args);
      },
    },
  }),
});

export default GraphQLViewerType;
