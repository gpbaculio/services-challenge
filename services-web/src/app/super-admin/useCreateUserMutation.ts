"use client";
import { graphql } from "relay-runtime";
import { useMutation } from "react-relay";
import { useCreateUserMutation } from "../../../__generated__/useCreateUserMutation.graphql";

const mutation = graphql`
  mutation useCreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      token
      error
      clientMutationId
    }
  }
`;

export default function useCreateUserMutation() {
  return useMutation<useCreateUserMutation>(mutation);
}
