import React from 'react'
import { ShareIcon, HeartIcon,ArrowsRightLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router';

const ProductCard = ({image,title,id}) => {
  return (
    <div className=" relative group shadow-md  overflow-hidden cursor-pointer bg-gray-200 flex flex-col items-center justify-center w-60 rounded-sm hover:scale-105 transition-transform duration-300">
      {/* product card here  */}
      <Link to={`/product-detail?id=${id}`}>
      <div className="relative w-50 mt-1">
        <img src={image} alt={title} className="size-40 mix-blend-multiply" />
        <span className="bg-red-300 font-medium text-[13px] p-1 rounded-full absolute top-0 right-0">
          -30%
        </span>
      </div>
      </Link>
      <div className="text-center mt-2 p-3">
        <h1 className="text-[14px] text-gray-900 font-medium">{title}</h1>
        <p className="text-[#898989] text-[12px]">Stylish cafe chair</p>

        <div className="w-full mt-2 ">
          <span className="text-[14px] mr-4">GHC 2.500.00</span>
          <span className="text-[14px] text-gray-400 line-through">
            GHC 3.500.00
          </span>
        </div>
      </div>
      {/* Hover Overlay */}
      <div className="absolute hidden inset-0 bg-black/60 bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-[#ffd43b] text-[#183153] font-semibold py-2 px-6 rounded-sm cursor-pointer">
          view Product
        </button>

        <div className="w-full flex justify-around mt-5">
          <p className="text-white font-medium text-[10px]">
            <ShareIcon className="size-3 inline " /> share{" "}
            <ArrowsRightLeftIcon className="size-4 inline ml-3" />
            compare <HeartIcon className="size-4 inline ml-3" />
            Like
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard
