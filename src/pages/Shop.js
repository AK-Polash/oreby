import React from "react";
import Container from "../components/layout/Container";
// import { useParams } from "react-router-dom";
import Bredcrumb from "../components/layout/Bredcrumb";
import Flex from "../components/layout/Flex";
import Pagination from "../components/layout/Pagination";

const Shop = () => {
  // let params = useParams();
  return (
    <div className="w-full">
      <Container>
        <Bredcrumb title="Products" />

        <Flex className="flex gap-x-10">
          <div className="w-[20%] bg-red-400">left part</div>
          <div className="relative w-[80%]">
            <Pagination itemsPerPage={12} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Shop;
