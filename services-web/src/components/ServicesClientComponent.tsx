"use client";

import { useRelayEnvironment } from "react-relay";

import { SerializablePreloadedQuery } from "@/relay/loadSerializableQuery";

import useSerializablePreloadedQuery from "@/relay/useSerializablePreloadedQuery";

import ServicesQueryNode, {
  ServicesQuery,
} from "../../__generated__/ServicesQuery.graphql";
import Services from "./Services";

type ServicesProps = {
  preloadedQuery: SerializablePreloadedQuery<
    typeof ServicesQueryNode,
    ServicesQuery
  >;
};

export default function ServicesClientComponent({
  preloadedQuery,
}: ServicesProps) {
  const environment = useRelayEnvironment();
  const queryRef = useSerializablePreloadedQuery(environment, preloadedQuery);

  return <Services queryRef={queryRef} />;
}
