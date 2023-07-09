import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import NavbarFour from "../UI/NavbarFour";
import ServiceDetailsArea from "../components/ServiceDetailsArea";

const ServiceDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarFour />

      {/* Navigation Bar */}
      <Breadcrumb title={"Service Details"} />

      {/* Service Details Area */}
      <ServiceDetailsArea />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default ServiceDetails;
