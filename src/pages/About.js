import React from "react";

import Breadcrumb from "../components/Breadcrumb";

import FooterOne from "../components/FooterOne";
import NavbarFour from "../UI/NavbarFour";

import TeamAreaThree from "../UI/TeamAreaThree";
import AboutAreaSix from "../UI/AboutAreaSix";
import WorkProcessFour from "../UI/WorkProcessFour";

const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarFour />

      {/* Navigation Bar */}
      <Breadcrumb title={"About Us"} />

      {/* About Area One */}
      <AboutAreaSix />

      {/* FAQ Area One */}

      {/* Team Area One */}
      <TeamAreaThree />

      {/* Counter Area One */}

      {/* Contact Area One */}

      {/* Work Process One */}
      <WorkProcessFour />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default About;
