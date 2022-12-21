import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Product from "./Product";
import Flex from "./Flex";

const OfferProducts = () => {
  return (
    <div className="w-full">
      <Container>
        <Heading
          className="pb-2 font-dm text-xl font-bold capitalize text-primary md:pb-6 md:text-2xl xl:pb-9 xl:text-[39px] 2xl:pb-12"
          title="special offer"
        />

        <Flex className="realtive flex w-full flex-wrap items-center justify-between gap-x-10 lg:flex-nowrap">
          <Product
            className="sm:max-xl:mb-5 sm:max-md:max-w-[180px] md:max-xl:max-w-[215px] 2xl:max-w-[370px]"
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
            className="sm:max-xl:mb-5 sm:max-md:max-w-[180px] md:max-xl:max-w-[215px] 2xl:max-w-[370px]"
            imgClass="w-full"
            src="assets/n2.png"
            alt="new_arrival_2"
            badgeShow={true}
            badgeTitle="New"
            productTitle="Basic Crew Neck Tee"
            productPrice="$89.00"
            productColor="Green"
          />

          <Product
            className="sm:max-xl:mb-5 sm:max-md:max-w-[180px] md:max-xl:max-w-[215px] 2xl:max-w-[370px]"
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
            className="sm:max-xl:mb-5 sm:max-md:max-w-[180px] md:max-xl:max-w-[215px] 2xl:max-w-[370px]"
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

export default OfferProducts;
