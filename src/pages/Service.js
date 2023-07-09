import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import NavbarFour from "../UI/NavbarFour";

import ServiceAreaGroup from "../components/ServiceAreaGroup";

const Service = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarFour />
      {/* Navigation Bar */}
      <Breadcrumb title={"Service"} />
      {/* Service Area One */}
      <ServiceAreaGroup />
      {/* Pricing Area One */}]{/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Service;
