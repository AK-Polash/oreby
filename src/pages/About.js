import React from "react";
import Container from "../components/layout/Container";
import Bredcrumb from "../components/layout/Bredcrumb";

const About = () => {
  return (
    <div className="w-full">
      <Container>
        <Bredcrumb title="About" />

        <div>About page</div>
      </Container>
    </div>
  );
};

export default About;
