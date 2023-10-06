import "dotenv/config";
import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import cors from "cors";

import schema from "./schema.mjs";
import { getUser } from "./auth.mjs";

const app = express();

app.use(cors());
// use postman as replacement for graphiql
app.all(
  "/graphql",
  createHandler({
    schema,
    context: async (req) => {
      const { user } = await getUser(req?.headers?.get("Authorization"));

      return { user };
    },
  })
);

app.listen({ port: 4000 });
console.log("Listening to port 4000");
