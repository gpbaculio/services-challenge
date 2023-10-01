import React, { useCallback, useId } from "react";
import { graphql, usePaginationFragment } from "react-relay";

import Service from "./Service";

import { ServicesListFragment$key } from "../../__generated__/ServicesListFragment.graphql";
import { ServicesListPaginationQuery } from "../../__generated__/ServicesListPaginationQuery.graphql";
import { ServiceFragment$key } from "../../__generated__/ServiceFragment.graphql";

type ServicesListProps = {
  viewer: ServicesListFragment$key | null;
};

function ServicesList({ viewer }: ServicesListProps) {
  const id = useId();

  const { data, loadNext, isLoadingNext, hasNext } = usePaginationFragment<
    ServicesListPaginationQuery,
    ServicesListFragment$key
  >(ServicesListFragmentGraphQL, viewer);

  // Callback to paginate the issues list
  const loadMore = useCallback(() => {
    // Don't fetch again if we're already loading the next page
    if (isLoadingNext) {
      return;
    }
    loadNext(2);
  }, [isLoadingNext, loadNext]);
  console.log("hasNext ", hasNext);
  return (
    <>
      {data?.serviceRequests?.edges?.map((edge, i) => {
        return (
          <Service
            key={`${id}-${i}`}
            service={edge?.node as ServiceFragment$key}
          />
        );
      })}
      <button onClick={loadMore} disabled={!hasNext || isLoadingNext}>
        {isLoadingNext ? "Loading..." : "Load More"}
      </button>
    </>
  );
}

export default ServicesList;

const ServicesListFragmentGraphQL = graphql`
  fragment ServicesListFragment on Viewer
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 2 }
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
