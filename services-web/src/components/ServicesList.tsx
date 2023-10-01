import React from "react";
import { graphql, PreloadedQuery, usePreloadedQuery } from "react-relay";

const ServicesListFragment = graphql`
  fragment ServicesListFragment on Viewer
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 10 }
  )
  @refetchable(queryName: "ServicesListPaginationQuery") {
    serviceRequests(after: $cursor, first: $count)
      @connection(key: "ServicesList_serviceRequests") {
      edges {
        cursor
        node {
          ...ServiceFragment
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;
function ServicesList() {
  return <div>ServicesList</div>;
}

export default ServicesList;
