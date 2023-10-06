import { fromGlobalId, nodeDefinitions } from "graphql-relay";

import {
  SERVICE_REQUEST_TYPE,
  ServiceRequestType,
  AdminType,
  ADMIN_TYPE,
} from "./ViewerTypes.mjs";
import { prisma } from "../index.mjs";

const { nodeInterface, nodeField } = nodeDefinitions(
  async (globalId) => {
    const { type, id } = fromGlobalId(globalId);

    if (type === SERVICE_REQUEST_TYPE) {
      const serviceRequest = await prisma.serviceRequest.findUnique({
        where: { id },
      });

      return serviceRequest;
    } else if (type === ADMIN_TYPE) {
      const admin = await prisma.user.findUnique({
        where: { id },
      });

      return admin;
    } else {
      return null;
    }
  },
  (obj) => {
    // definitely a service request if valid
    if (obj?.servicetype) {
      return ServiceRequestType;
    } else if (obj?.name && !obj.hasOwnProperty("type")) {
      // user has type but not AdminType
      return AdminType;
    } else {
      return null;
    }
  }
);

export { nodeField, nodeInterface };
