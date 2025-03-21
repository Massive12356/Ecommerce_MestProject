import React from 'react'
import logo from '../assets/images/logo.png'
import { UserIcon,HeartIcon,MagnifyingGlassIcon,ShoppingCartIcon }  from "@heroicons/react/24/outline";
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center p-1 bg-green-100">
      <div>
        <img src={logo} alt="logo" srcset="" className="h-[41px]" />
      </div>

      <div className="flex flex-row w-[30%] justify-around">
        <Link to={'/'} className="font-medium cursor-pointer hover:text-[#B88E2F]">
          Home
        </Link>
        <Link  to={'/shop'} className="font-medium cursor-pointer hover:text-[#B88E2F]">
          Shop
        </Link>
        <Link to={'/about'} className="font-medium cursor-pointer hover:text-[#B88E2F]">
          About
        </Link>
        <Link to={'/contact'} className="font-medium cursor-pointer hover:text-[#B88E2F]">
          Contact
        </Link>
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
