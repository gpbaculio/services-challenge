import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId, offsetToCursor } from "graphql-relay";

import { GraphQLServiceRequestEdge } from "../query/types/ServiceRequestType.mjs";
import { prisma } from "../query/types/Viewer.mjs";

const createServiceRequest = mutationWithClientMutationId({
  name: "CreateServiceRequest",
  inputFields: {
    customerName: { type: new GraphQLNonNull(GraphQLString) },
    serviceType: { type: new GraphQLNonNull(GraphQLString) },
    status: { type: new GraphQLNonNull(GraphQLString) },
    scheduledDate: { type: new GraphQLNonNull(GraphQLString) },
    contactInfo: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    serviceRequestEdge: {
      type: GraphQLServiceRequestEdge,
      resolve: async ({ serviceRequestEdge: { node: serviceRequest } }) => {
        const totalCount = await prisma.serviceRequest.count();

        return {
          cursor: offsetToCursor(serviceRequest.id),
          node: serviceRequest,
          hasNextPage: totalCount > serviceRequest.id + 1,
        };
      },
    },
  },
  mutateAndGetPayload: async ({
    customerName,
    serviceType,
    status,
    scheduledDate,
    contactInfo,
  }) => {
    const serviceRequest = await prisma.serviceRequest.create({
      data: {
        customerName,
        serviceType,
        status,
        scheduledDate,
        contactInfo,
      },
    });

    return { serviceRequestEdge: { node: serviceRequest } };
  },
});

export default createServiceRequest;
