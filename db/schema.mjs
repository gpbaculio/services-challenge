import { GraphQLSchema } from "graphql";

import query from "./query/index.mjs";
import mutation from "./mutations/index.mjs";

const schema = new GraphQLSchema({
  query,
  mutation,
});

export default schema;
