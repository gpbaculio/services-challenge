/**
 * @generated SignedSource<<a93b17a256ed189322c9145937e65daf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type UserLoginInput = {
  clientMutationId?: string | null;
  email: string;
  password: string;
};
export type useLoginMutation$variables = {
  input: UserLoginInput;
};
export type useLoginMutation$data = {
  readonly loginUser: {
    readonly clientMutationId: string | null;
    readonly error: string | null;
    readonly token: string | null;
  } | null;
};
export type useLoginMutation = {
  response: useLoginMutation$data;
  variables: useLoginMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UserLoginPayload",
    "kind": "LinkedField",
    "name": "loginUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useLoginMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useLoginMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0cb1d773064f4c26874eb176b754de55",
    "id": null,
    "metadata": {},
    "name": "useLoginMutation",
    "operationKind": "mutation",
    "text": "mutation useLoginMutation(\n  $input: UserLoginInput!\n) {\n  loginUser(input: $input) {\n    token\n    error\n    clientMutationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "a1606afaa535fc48c508d7869b308395";

export default node;
