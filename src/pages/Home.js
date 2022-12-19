import React from "react";
import Banner from "../components/layout/Banner";
import AdditionalInfo from "../components/layout/AdditionalInfo";
import Advertise from "../components/layout/Advertise";
import NewArrival from "../components/layout/NewArrival";

const Home = () => {
  return (
    <>
      <Banner />
      <AdditionalInfo />
      <Advertise />
      <NewArrival />
    </>
  );
};

export default Home;
