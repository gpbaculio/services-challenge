import React from "react";
import { graphql } from "react-relay";

const ServiceFragment = graphql`
  fragment ServiceFragment on ServiceRequest {
    id
    customerName
    serviceType
    status
    scheduledDate
    contactInfo
  }
`;

function Service() {
  return <div>Service</div>;
}

export default Service;
