import React, { useState } from "react";
import Bredcrumb from "../components/layout/Bredcrumb";
import Container from "../components/layout/Container";
import InputBox from "../components/layout/InputBox";
import Flex from "../components/layout/Flex";
import Button from "../components/layout/Button";
import Accordion from "../components/layout/Accordion";

const Contacts = () => {
  const accordionValues = [
    {
      heading: "Germany Office",
      content: {
        address: "575 Crescent Ave. Quakertown, PA 18951",
        phone: "+432 533 12 523",
        email: "info@domain.com",
        time: "Mon - Fri: 9am - 6pm",
      },
    },
    {
      heading: "Slovakia Office",
      content: {
        address: "575 Crescent Ave. Quakertown, PA 18951",
        phone: "+432 533 12 523",
        email: "info@domain.com",
        time: "Mon - Fri: 9am - 6pm",
      },
    },
    {
      heading: "Lithuania Office",
      content: {
        address: "575 Crescent Ave. Quakertown, PA 18951",
        phone: "+432 533 12 523",
        email: "info@domain.com",
        time: "Mon - Fri: 9am - 6pm",
      },
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleWriteFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSendFormData = () => {
    console.log("Message Sent", formData);
  };

  return (
    <div className="w-full">
      <Container>
        <Bredcrumb />

        <div className="w-full">
          <h2 className="mb-4 font-dm text-xl font-bold text-primary lg:text-2xl xl:mb-10 xl:text-4xl">
            Fill up a Form
          </h2>
          <Flex className="flex w-full flex-col gap-y-5 md:w-2/4 xl:w-[780px]">
            <InputBox
              as="input"
              type="text"
              title="Name"
              placeholder="Your name here"
              for="name"
              id="name"
              name="name"
              onChange={handleWriteFormData}
              value={formData.name}
            />
            <InputBox
              as="input"
              type="email"
              title="Email"
              placeholder="Your email here"
              for="email"
              id="email"
              name="email"
              onChange={handleWriteFormData}
              value={formData.email}
            />
            <InputBox
              as="textarea"
              title="Message"
              placeholder="Your message here"
              for="message"
              id="message"
              name="message"
              onChange={handleWriteFormData}
              value={formData.message}
            />
            <Button type="submit" btnText="Post" onClick={handleSendFormData} />
          </Flex>
        </div>

        <Accordion accordionValues={accordionValues} />
      </Container>
    </div>
  );
};

export default Contacts;
