"use client";

import { useCallback, useState } from "react";

import { graphql } from "relay-runtime";
import { useMutation } from "react-relay";

import {
  UserLoginInput,
  useLoginMutation,
} from "../../../__generated__/useLoginMutation.graphql";

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
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginFailure, setLoginFailure] = useState(false);

  const [commit, isLoading] = useMutation<useLoginMutation>(graphQLMutation);

  const login = useCallback(
    (input: UserLoginInput) => {
      commit({
        variables: { input },
        onCompleted({ loginUser }) {
          if (loginUser?.token) {
            localStorage.setItem("token", loginUser.token);
            setLoginSuccess(true);
          }
          if (loginUser?.error) {
            setLoginFailure(true);
          }
        },
      });
    },
    [commit]
  );

  return {
    login,
    isLoading,
    loginSuccess,
    loginFailure,
  };
}
