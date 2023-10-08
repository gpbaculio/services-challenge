import { GraphQLNonNull, GraphQLString } from "graphql";

import { mutationWithClientMutationId } from "graphql-relay";

import { prisma } from "../query/index.mjs";
import { authenticate } from "../auth.mjs";

const GraphQLUserLoginMutation = mutationWithClientMutationId({
  name: "UserLogin",
  inputFields: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  mutateAndGetPayload: async ({ email, password }) => {
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      return { token: null, error: "INVALID_EMAIL_PASSWORD" };
    }

    const correctPassword = authenticate(password, user.password);

    if (!correctPassword) {
      return { token: null, error: "INVALID_EMAIL_PASSWORD" };
    }

    return { token: generateToken(user), error: null };
  },
  outputFields: {
    token: { type: GraphQLString, resolve: ({ token }) => token },
    error: { type: GraphQLString, resolve: ({ error }) => error },
  },
});

export default GraphQLUserLoginMutation;
