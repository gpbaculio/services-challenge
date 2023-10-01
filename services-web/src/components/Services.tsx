import { Suspense } from "react";
import { PreloadedQuery, graphql, usePreloadedQuery } from "react-relay";

import { ServicesQuery } from "../../__generated__/ServicesQuery.graphql";
import ServicesList from "./ServicesList";

const ServicesQueryGraphQL = graphql`
  query ServicesQuery {
    viewer {
      id
      ...ServicesListFragment
    }
  }
`;

type ServicesProps = {
  queryRef: PreloadedQuery<ServicesQuery>;
};

export default function Services({ queryRef }: ServicesProps) {
  const { viewer } = usePreloadedQuery(ServicesQueryGraphQL, queryRef);

  return (
    <Suspense fallback="Loading (client side)...">
      <h1>Services</h1>
      <ServicesList viewer={viewer} />
    </Suspense>
  );
}
