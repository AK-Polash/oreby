import React from "react";
import Image from "./Image";
import Badge from "./Badge";
import Flex from "./Flex";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Product = ({
  className,
  imgClass,
  src,
  alt,
  badgeShow,
  badgeTitle,
  productTitle,
  productPrice,
  productColor,
}) => {
  return (
    <div className={className}>
      <div className="group relative overflow-y-hidden">
        <Image className={imgClass} source={src} alt={alt} />
        {badgeShow && <Badge title={badgeTitle} />}

        <div className="absolute bottom-[-60%] left-0 w-full bg-red-400 py-[25px] px-[30px] transition-all duration-150 ease-linear group-hover:bottom-0">
          <Link
            className="group/link inline-flex w-full items-center justify-end gap-x-[15px]"
            to="#"
          >
            <span className="font-dm text-sm font-normal text-secondary transition-all duration-150 ease-linear group-hover/link:text-primary 2xl:text-base">
              Add to Wish List
            </span>
            <FaHeart className="text-sm text-secondary group-hover/link:text-primary" />
          </Link>
          <Link
            className="group/link my-1 inline-flex w-full items-center justify-end gap-x-[15px] xl:my-2 2xl:my-5"
            to="#"
          >
            <span className="font-dm text-sm font-normal text-secondary transition-all duration-150 ease-linear group-hover/link:text-primary 2xl:text-base">
              Compare
            </span>
            <TfiReload className="text-sm text-secondary group-hover/link:text-primary" />
          </Link>
          <Link
            className="group/link inline-flex w-full items-center justify-end gap-x-[15px]"
            to="#"
          >
            <span className="font-dm text-sm font-normal text-secondary transition-all duration-150 ease-linear group-hover/link:text-primary 2xl:text-base">
              Add to Cart
            </span>
            <FaShoppingCart className="text-sm text-secondary group-hover/link:text-primary" />
          </Link>
        </div>
      </div>
      <div className="w-full">
        <Flex className="flex items-center justify-between pt-3 pb-1 2xl:pt-6 2xl:pb-[15px]">
          <h3 className="font-dm font-bold text-primary lg:text-base 2xl:text-xl">
            {productTitle}
          </h3>
          <span className="font-dm font-normal text-secondary lg:text-sm 2xl:text-base">
            {productPrice}
          </span>
        </Flex>
        <span className="font-dm font-normal text-secondary lg:text-sm 2xl:text-base">
          {productColor}
        </span>
      </div>
    </div>
  );
};

export default Product;
