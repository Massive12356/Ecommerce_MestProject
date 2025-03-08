import React from 'react'
import footImg from '../assets/images/footer.png'

const Footer = () => {
  return (
    <div className="w-[100%] bg-white flex flex-col  items-center justify-between p-5">
      <div className="w-[90%] flex justify-between items-center border-b-1 border-gray-200">
        {/* furno div */}
        <div className="flex flex-col  w-[30%] h-[250px]">
          <div>
            <img src={footImg} alt="footer logo" className="w-[85px]" />
          </div>

          <div className="py-10">
            <p className="text-gray-400 text-[16px]">
              400 University Drive suite 200 Coral Cables, <br /> FL 33134 USA
            </p>
          </div>
        </div>
        {/* links Div */}
        <div className="w-[20%] h-[300px] flex flex-col items-center justify-around">
          <p className="text-gray-400">Links</p>
          <ul className="flex flex-col items-center justify-between  h-[60%]">
            <a
              className="font-medium cursor-pointer hover:text-[#B88E2F]"
              href="#"
            >
              Home
            </a>
            <a
              className="font-medium cursor-pointer hover:text-[#B88E2F]"
              href="#"
            >
              Shop
            </a>
            <a
              className="font-medium cursor-pointer hover:text-[#B88E2F]"
              href="#"
            >
              About
            </a>
            <a
              className="font-medium cursor-pointer hover:text-[#B88E2F]"
              href="#"
            >
              Contact
            </a>
          </ul>
        </div>

        {/* help Div */}
        <div className="w-[20%] h-[250px] flex flex-col">
          <p className="text-gray-400 cursor-pointer hover:text-[#B88E2F]">
            Help
          </p>
          <ul className="flex flex-col justify-around gap-5 py-10 h-[70%]">
            <li className="font-medium cursor-pointer hover:text-[#B88E2F]">
              Payments Options
            </li>
            <li className="font-medium cursor-pointer hover:text-[#B88E2F]">
              Returns
            </li>
            <li className="font-medium cursor-pointer hover:text-[#B88E2F]">
              privacy Policy
            </li>
          </ul>
        </div>

        {/* newsletter Div */}
        <div className="w-[29%] h-[250px]">
          <p className="text-gray-400">Newsletter</p>
          <input
            type="text"
            placeholder="Your Email Address"
            className="mt-9 gap-x-2 outline-none  border-b-1 "
          />
          <button className="border-b-1 ml-1">Subscribe</button>
        </div>
      </div>

      <div className="w-full px-13">
        <p>2023 furino. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer
