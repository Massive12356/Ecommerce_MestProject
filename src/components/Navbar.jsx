import React from 'react'
import logo from '../assets/images/logo.png'
import { UserIcon,HeartIcon,MagnifyingGlassIcon,ShoppingCartIcon }  from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center p-1 bg-green-100">
      <div>
        <img src={logo} alt="logo" srcset="" className="h-[41px]" />
      </div>

      <div className="flex flex-row w-[30%] justify-around">
        <span className="font-medium cursor-pointer hover:text-[#B88E2F]">
          Home
        </span>
        <span className="font-medium cursor-pointer hover:text-[#B88E2F]">
          Shop
        </span>
        <span className="font-medium cursor-pointer hover:text-[#B88E2F]">
          About
        </span>
        <span className="font-medium cursor-pointer hover:text-[#B88E2F]">
          Contact
        </span>
      </div>

      <div className="flex flex-row w-[20%] justify-between">
        <UserIcon className="size-[28px] hover:scale-105 cursor-pointer" />
        <MagnifyingGlassIcon className="size-[28px] hover:scale-105 cursor-pointer" />
        <HeartIcon className="size-[28px] hover:scale-105 cursor-pointer" />
        <div className="relative flex flex-row items-center hover:scale-105 cursor-pointer">
          <span className="absolute -top-1 -right-1 text-[10px] text-white font-medium bg-red-600  px-2 rounded-full">
            0
          </span>
          <ShoppingCartIcon className="size-[28px]" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar
