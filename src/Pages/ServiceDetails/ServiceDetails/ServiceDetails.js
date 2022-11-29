import React from "react";
import ReviewItem from "../../Home/Reviews/ReviewItem";
import ReviewSection from "../ReviewSection/ReviewSection";
import ServiceDetailsSection from "../ServiceDetailsSection/ServiceDetailsSection";

const ServiceDetails = () => {
  return (
    <div>
      <ServiceDetailsSection></ServiceDetailsSection>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default ServiceDetails;
