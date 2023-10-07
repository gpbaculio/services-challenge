/**
 * @generated SignedSource<<f8cb7a0e4ebcfa736a5ae9449c7fa224>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateUserInput = {
  clientMutationId?: string | null;
  email: string;
  image: string;
  name: string;
  password: string;
};
export type useCreateUserMutation$variables = {
  input: CreateUserInput;
};
export type useCreateUserMutation$data = {
  readonly createUser: {
    readonly clientMutationId: string | null;
    readonly error: string | null;
    readonly token: string | null;
  } | null;
};
export type useCreateUserMutation = {
  response: useCreateUserMutation$data;
  variables: useCreateUserMutation$variables;
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
    "concreteType": "CreateUserPayload",
    "kind": "LinkedField",
    "name": "createUser",
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
    "name": "useCreateUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useCreateUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a3e3c96b01623f1d5b76c390e3eef895",
    "id": null,
    "metadata": {},
    "name": "useCreateUserMutation",
    "operationKind": "mutation",
    "text": "mutation useCreateUserMutation(\n  $input: CreateUserInput!\n) {\n  createUser(input: $input) {\n    token\n    error\n    clientMutationId\n  }\n}\n"
  }
};
})();

(node as any).hash = "04ae23531a4f0536b06354e8dc49268d";

export default node;
