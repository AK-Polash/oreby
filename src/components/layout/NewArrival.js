import React from "react";
import { FaLastfm } from "react-icons/fa";
import Container from "./Container";
import Flex from "./Flex";
import Heading from "./Heading";
import Product from "./Product";

const NewArrival = () => {
  return (
    <div className="w-full pt-32">
      <Container>
        <Heading title="new arrival" />
        <Flex className="flex items-center justify-between gap-x-10">
          <Product
            className="max-w-[370px]"
            imgClass="w-full"
            src="assets/n1.png"
            alt="new_arrival_1"
            badgeShow={true}
            badgeTitle="New"
            productTitle="Basic Table Watch"
            productPrice="$44.00"
            productColor="Black"
          />
          <Product
            className="max-w-[370px]"
            imgClass="w-full"
            src="assets/n2.png"
            alt="new_arrival_2"
            badgeShow={false}
            badgeTitle="New"
            productTitle="Basic Crew Neck Tee"
            productPrice="$89.00"
            productColor="Green"
          />
          <Product
            className="max-w-[370px]"
            imgClass="w-full"
            src="assets/n3.png"
            alt="new_arrival_3"
            badgeShow={true}
            badgeTitle="New"
            productTitle="Basic Crew Neck Tee"
            productPrice="$54.00"
            productColor="Blue"
          />
          <Product
            className="max-w-[370px]"
            imgClass="w-full"
            src="assets/n4.png"
            alt="new_arrival_4"
            badgeShow={false}
            badgeTitle="New"
            productTitle="Basic Crew Neck Tee"
            productPrice="$85.00"
            productColor="Purple"
          />
        </Flex>
      </Container>
    </div>
  );
};

export default NewArrival;
