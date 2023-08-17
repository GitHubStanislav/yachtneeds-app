import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa, faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import logo from "@/app/icons/logo-small.6645556.svg";

function Footer() {
  return (
    <div className="bg-gray-800 px-4 lg:px-28 p-6 text-white">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        <label
          htmlFor="logo"
          className="cursor-pointer flex items-center mr-10 mb-6 md:mb-0 w-full md:w-auto"
        >
          <Image
            priority={true}
            src={logo}
            alt="logo"
            className="h-9 md:h-11"
          />
          <div className="ml-2 md:ml-5 text-sm ">Y A C H T N E E D S</div>
        </label>

        {/* Вторая колонка */}
        <div className="flex flex-col w-full md:w-1/5 space-y-2 mb-6 md:mb-0">
          <h3 className="font-bold">YACHTNEEDS logo</h3>
          <a href="#" className="hover:underline">
            Shop categories
          </a>
          <a href="#" className="hover:underline">
            Bridge
          </a>
          <a href="#" className="hover:underline">
            Deck
          </a>
          <a href="#" className="hover:underline">
            Engineering
          </a>
          <a href="#" className="hover:underline">
            Galley
          </a>
          <a href="#" className="hover:underline">
            Interior
          </a>
          <a href="#" className="hover:underline">
            Other
          </a>
          <a href="#" className="hover:underline">
            Manufacturers
          </a>
        </div>

        {/* Третья колонка */}
        <div className="flex flex-col w-full md:w-1/5 space-y-2 mb-6 md:mb-0">
          <h3 className="font-bold">Company</h3>
          <a href="#" className="hover:underline">
            About YACHTNEEDS
          </a>
          <a href="#" className="hover:underline">
            FAQs & Support
          </a>
          <a href="#" className="hover:underline">
            Contact YACHTNEEDS
          </a>
          <a href="#" className="hover:underline">
            Collecting your order
          </a>
          <a href="#" className="hover:underline">
            Media & marketing opportunities
          </a>
          <a href="#" className="hover:underline">
            Free Shipping
          </a>
        </div>

        {/* Четвертая колонка */}
        <div className="flex flex-col w-full md:w-1/5 space-y-2 mb-6 md:mb-0">
          <h3 className="font-bold">Legal info</h3>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Refund & Returns
          </a>
          <a href="#" className="hover:underline">
            Restrictions & Shipping Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Cookie Policy
          </a>
        </div>

        {/* Пятая колонка - соцсети */}
        <div className="flex flex-col w-full lg:w-1/5 items-center lg:items-start justify-center space-y-2 mt-6 lg:mt-0">
          <h3 className="font-bold">Stay in touch:</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaFacebookF className="w-5 h-5 fill-current" />
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-800">
              <FaInstagram className="w-5 h-5 fill-current" />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <FaTwitter className="w-5 h-5 fill-current" />
            </a>
            <a href="#" className="text-red-600 hover:text-red-800">
              <FaYoutube className="w-5 h-5 fill-current" />
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-900">
              <FaLinkedinIn className="w-5 h-5 fill-current" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center flex-wrap mt-10">
        <div className="text-sm text-gray-500 mb-4 md:mb-0 text-center md:text-left">
          Est-Ouest, 24, Boulevard Princesse Charlotte, 98000, Monaco
        </div>
        <div className="flex space-x-2 md:space-x-4">
          <a href="#" className="text-gray-200 hover:text-blue-900">
            <FontAwesomeIcon
              icon={faCcVisa}
              className="w-8 h-8 md:w-12 md:h-12 fill-current"
            />
          </a>
          <a href="#" className="text-gray-200 hover:text-blue-900">
            <FontAwesomeIcon
              icon={faCcMastercard}
              className="w-8 h-8 md:w-12 md:h-12 fill-current"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
