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

        <div className="absolute bottom-[-60%] left-0 w-full bg-pure py-[25px] px-[30px] transition-all duration-150 ease-linear group-hover:bottom-0">
          <Link
            to="#"
            className="group/link inline-flex w-full items-center justify-end gap-x-[15px]"
          >
            <span className="font-dm text-base font-normal text-secondary transition-all duration-150 ease-linear group-hover/link:text-primary">
              Add to Wish List
            </span>
            <FaHeart className="text-sm text-secondary group-hover/link:text-primary" />
          </Link>
          <Link
            to="#"
            className="group/link my-5 inline-flex w-full items-center justify-end gap-x-[15px]"
          >
            <span className="font-dm text-base font-normal text-secondary transition-all duration-150 ease-linear group-hover/link:text-primary">
              Compare
            </span>
            <TfiReload className="text-sm text-secondary group-hover/link:text-primary" />
          </Link>
          <Link
            to="#"
            className="group/link inline-flex w-full items-center justify-end gap-x-[15px]"
          >
            <span className="font-dm text-base font-normal text-secondary transition-all duration-150 ease-linear group-hover/link:text-primary">
              Add to Cart
            </span>
            <FaShoppingCart className="text-sm text-secondary group-hover/link:text-primary" />
          </Link>
        </div>
      </div>
      <div className="w-full">
        <Flex className="flex items-center justify-between pt-6 pb-[15px]">
          <h3 className=" font-dm text-xl font-bold text-primary">
            {" "}
            {productTitle}{" "}
          </h3>
          <span className="font-dm text-base font-normal text-secondary">
            {productPrice}
          </span>
        </Flex>
        <span className="font-dm text-base font-normal text-secondary">
          {productColor}
        </span>
      </div>
    </div>
  );
};

export default Product;
