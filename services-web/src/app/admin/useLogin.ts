"use client";

import { graphql } from "relay-runtime";
import { useMutation } from "react-relay";

import { useLoginMutation } from "../../../__generated__/useLoginMutation.graphql";

const graphQLMutation = graphql`
  mutation useLoginMutation($input: UserLoginInput!) {
    loginUser(input: $input) {
      token
      error
      clientMutationId
    }
  }
`;

export default function useLogin() {
  return useMutation<useLoginMutation>(graphQLMutation);
}
