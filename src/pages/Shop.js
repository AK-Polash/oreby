import React, { useState } from "react";
import Container from "../components/layout/Container";
// import { useParams } from "react-router-dom";
import Bredcrumb from "../components/layout/Bredcrumb";
import Flex from "../components/layout/Flex";
import Pagination from "../components/layout/Pagination";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { FaList } from "react-icons/fa";
import Select from "../components/layout/Select";
import SelectOption from "../components/layout/SelectOption";
import Label from "../components/layout/Label";

const Shop = () => {
  // let params = useParams();
  let showOptions = [
    { optionValue: 12, optionText: 12 },
    { optionValue: 24, optionText: 24 },
    { optionValue: 48, optionText: 48 },
  ];

  let [productShow, setProductShow] = useState(12);

  let sortOptions = [
    { optionValue: "featured", optionText: "Featured" },
    { optionValue: "newArrival", optionText: "New Arrival" },
    { optionValue: "bestSeller", optionText: "Best Seller" },
    { optionValue: "specialOffer", optionText: "Special Offer" },
  ];

  return (
    <div className="w-full">
      <Container>
        <Bredcrumb title="Products" />

        <Flex className="flex gap-x-3 md:gap-x-5 xl:gap-x-10">
          <div className="w-[20%] bg-red-400"> left part </div>

          <div className="relative w-[80%]">
            <Flex className="flex flex-wrap items-center justify-between gap-y-2 pb-8 lg:gap-y-0 lg:pb-10 xl:pb-[60px]">
              <Flex className="flex items-center gap-x-1.5 lg:gap-x-5">
                <div className="group flex h-7 w-7 cursor-pointer items-center justify-center border-2 border-solid border-smoke bg-transparent transition-all duration-100 ease-linear hover:border-transparent hover:bg-primary lg:h-9 lg:w-9">
                  <TfiLayoutGrid2Alt className="text-xs text-primary group-hover:text-pure lg:text-base" />
                </div>
                <div className="group flex h-7 w-7 cursor-pointer items-center justify-center border-2 border-solid border-smoke bg-transparent transition-all duration-100 ease-linear hover:border-transparent hover:bg-primary lg:h-9 lg:w-9">
                  <FaList className="text-xs text-primary group-hover:text-pure lg:text-base" />
                </div>
              </Flex>
              <Flex className="flex flex-wrap items-center justify-between gap-y-2 gap-x-1.5 lg:gap-x-10 lg:gap-y-0">
                <Flex className="flex items-center justify-between gap-x-1 lg:gap-x-4">
                  <Label
                    htmlFor="category"
                    className="hidden font-dm text-sm font-normal text-secondary md:block lg:text-base"
                    labelText="Sort by:"
                  />
                  <Select
                    // onChange={}
                    id="category"
                    className="block cursor-pointer border-2 border-smoke bg-transparent py-[2px] px-2 font-dm text-sm font-normal text-secondary focus:border-blue-300 lg:py-[5px] lg:px-5 lg:text-base"
                  >
                    {sortOptions.map((option, index) => (
                      <SelectOption
                        key={index}
                        optionValue={option.optionValue}
                        className="bg-[#999] text-pure"
                        optionText={option.optionText}
                      />
                    ))}
                  </Select>
                </Flex>

                <Flex className="flex items-center justify-between gap-x-1 lg:gap-x-4">
                  <Label
                    htmlFor="show"
                    className="hidden font-dm text-sm font-normal text-secondary md:block lg:text-base"
                    labelText="Show:"
                  />
                  <Select
                    onChange={(e) => setProductShow(+e.target.value)}
                    id="show"
                    className="block cursor-pointer border-2 border-smoke bg-transparent py-[2px] px-2 font-dm text-sm font-normal text-secondary focus:border-blue-300 lg:py-[5px] lg:px-5 lg:text-base"
                  >
                    {showOptions.map((option, index) => (
                      <SelectOption
                        key={index}
                        optionValue={option.optionValue}
                        className="bg-[#999] text-pure"
                        optionText={option.optionText}
                      />
                    ))}
                  </Select>
                </Flex>
              </Flex>
            </Flex>

            <Pagination itemsPerPage={productShow} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Shop;
