import { fromGlobalId, nodeDefinitions } from "graphql-relay";

import { prisma } from "./Viewer.mjs";
import ServiceRequestType, {
  SERVICE_REQUEST_TYPE,
} from "./ServiceRequestType.mjs";

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
