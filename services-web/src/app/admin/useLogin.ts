"use client";

import { useCallback, useState } from "react";

import { graphql } from "relay-runtime";
import { useMutation } from "react-relay";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const [loginFailure, setLoginFailure] = useState(false);

  const [commit, isLoading] = useMutation<useLoginMutation>(graphQLMutation);

  const login = useCallback(
    (input: UserLoginInput) => {
      commit({
        variables: { input },
        onCompleted({ loginUser }) {
          if (loginUser?.token) {
            localStorage.setItem("token", loginUser.token);
            router.push("/admin/service-requests");
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
    loginFailure,
  };
}
