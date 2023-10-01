/**
 * @generated SignedSource<<e5bba001ee3ebaf9bb748d9a29b1ba90>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentRefs } from "relay-runtime";
export type ServiceFragment$data = {
  readonly contactInfo: string | null;
  readonly customerName: string | null;
  readonly scheduledDate: string | null;
  readonly serviceType: string | null;
  readonly status: string | null;
  readonly " $fragmentType": "ServiceFragment";
};
export type ServiceFragment$key = {
  readonly " $data"?: ServiceFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ServiceFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ServiceFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "customerName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "serviceType",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "scheduledDate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "contactInfo",
      "storageKey": null
    }
  ],
  "type": "ServiceRequest",
  "abstractKey": null
};

(node as any).hash = "72fb198677da2209337badf628dc2929";

export default node;
