// external imports
import { GraphQLObjectType } from "graphql";

import GraphQLViewerType from "./types/Viewer.mjs";
import { nodeField } from "./types/ServiceRequestType.mjs";

const query = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    viewer: { type: GraphQLViewerType },
    node: nodeField,
  }),
});

export default query;
