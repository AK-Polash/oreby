import React from "react";
import Bredcrumb from "../components/layout/Bredcrumb";
import Container from "../components/layout/Container";
import InputBox from "../components/layout/InputBox";
import Flex from "../components/layout/Flex";
import Button from "../components/layout/Button";

const Contacts = () => {
  return (
    <div className="w-full">
      <Container>
        <Bredcrumb />

        <div className="w-full">
          <h2 className="mb-4 font-dm text-xl font-bold text-primary lg:text-2xl xl:mb-10 xl:text-4xl">
            Fill up a Form
          </h2>
          <Flex className="flex w-full flex-col gap-y-5 md:w-2/4 xl:w-[780px]">
            <InputBox title="Name" placeholder="Your name here" />
            <InputBox
              type="email"
              title="Email"
              placeholder="Your email here"
            />
            <InputBox
              type="textArea"
              title="Message"
              placeholder="Your message here"
            />
            <Button type="submit" btnText="Post" />
          </Flex>
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
