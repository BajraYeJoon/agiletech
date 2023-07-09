import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import NavbarFour from "../UI/NavbarFour";
import TeamAreaGroup from "../components/TeamAreaGroup";

const Team = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarFour />

      {/* Breadcrumb */}
      <Breadcrumb title={"Team"} />

      {/* Team Area Group */}
      <TeamAreaGroup />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Team;
