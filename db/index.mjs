import express from "express";
import { createHandler } from "graphql-http/lib/use/express";

import schema from "./schema.mjs";

const app = express();
// use postman as replacement for graphiql
app.all("/graphql", createHandler({ schema }));

app.listen({ port: 4000 });
console.log("Listening to port 4000");
