import { Suspense } from "react";
import { graphql, PreloadedQuery, usePreloadedQuery } from "react-relay";

const ServicesQuery = graphql`
  query ServicesQuery {
    viewer {
      ...ServicesListFragment
    }
  }
`;

export default function Services() {
  return (
    <Suspense fallback="Loading (client side)...">
      <h1>Services</h1>
    </Suspense>
  );
}
