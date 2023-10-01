import React from "react";
import { graphql, useFragment } from "react-relay";
import { ServiceFragment$key } from "../../__generated__/ServiceFragment.graphql";

const ServiceFragmentGraphQL = graphql`
  fragment ServiceFragment on ServiceRequest {
    customerName
    serviceType
    status
    scheduledDate
    contactInfo
  }
`;

type ServiceProps = {
  service: ServiceFragment$key | null;
};

function Service({ service }: ServiceProps) {
  const serviceData = useFragment(ServiceFragmentGraphQL, service);
  return <div style={{ color: "red" }}>{serviceData?.customerName}</div>;
}

export default Service;
