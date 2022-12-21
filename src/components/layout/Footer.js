import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import Image from "./Image";

const Footer = () => {
  return (
    <div className="mt-36 bg-[#F5F5F3] py-14">
      <Container>
        <Flex className="flex">
          <div className="w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">MENU</h4>
            <List>
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-valin"
                item="Home"
                href="#"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-valin"
                item="Shop"
                href="#"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-valin"
                item="About"
                href="#"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-valin"
                item="Contact"
                href="#"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-valin"
                item="Journal1"
                href="#"
                linkStyle="inline-block"
              />
            </List>
          </div>
          <div className="w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">SHOP</h4>
            <List>
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-valin"
                item="Category 1"
                href="#"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-valin"
                item="Category 2"
                href="#"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-valin"
                item="Category 3"
                href="#"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-valin"
                item="Category 4"
                href="#"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-valin"
                item="Category 5"
                href="#"
                linkStyle="inline-block"
              />
            </List>
          </div>
          <div className="w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">HELP</h4>
            <List>
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-valin"
                item="Privacy Policy"
                href="#"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-valin"
                item="Terms & Conditions"
                href="#"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-valin"
                item="Special E-shop"
                href="#"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-valin"
                item="Shipping"
                href="#"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-valin"
                item="Secure Payments"
                href="#"
                linkStyle="inline-block"
              />
            </List>
          </div>
          <div className="flex w-[30%] justify-center">
            <div>
              <h4 className="mb-4 font-dm text-base font-bold">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="mt-[6px] font-dm text-sm font-normal text-valin">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
          <div className="w-[40%]">
            <Image
              className="w-[100px]"
              source="assets/logo.png"
              alt="footer logo"
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
