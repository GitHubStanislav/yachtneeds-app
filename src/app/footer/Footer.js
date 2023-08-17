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

<<<<<<< HEAD
const COMPANY_CATEGORIES = [
  "YACHTNEEDS",
  "Est-Ouest, 24, Boulevard Princesse Charlotte, 98000, Monaco",
];

=======
>>>>>>> add-footer
const socialLinks = [
  {
    icon: <FaFacebookF className="w-5 h-5 fill-current" />,
    color: "blue-600",
    hoverColor: "blue-800",
  },
  {
    icon: <FaInstagram className="w-5 h-5 fill-current" />,
    color: "pink-600",
    hoverColor: "pink-800",
  },
  {
    icon: <FaTwitter className="w-5 h-5 fill-current" />,
    color: "blue-400",
    hoverColor: "blue-600",
  },
  {
    icon: <FaYoutube className="w-5 h-5 fill-current" />,
    color: "red-600",
    hoverColor: "red-800",
  },
  {
    icon: <FaLinkedinIn className="w-5 h-5 fill-current" />,
    color: "blue-700",
    hoverColor: "blue-900",
  },
];

const paymentIcons = [
  { icon: faCcVisa, color: "gray-200", hoverColor: "blue-900" },
  { icon: faCcMastercard, color: "gray-200", hoverColor: "blue-900" },
];

const LinkColumn = ({ title, links }) => (
  <div className="flex flex-col w-full md:w-1/5 space-y-2 mb-6 md:mb-0">
    <h3 className="font-bold">{title}</h3>
    {links.map((link) => (
      <a key={link} href="#" className="hover:underline">
        {link}
      </a>
    ))}
  </div>
);

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

        <LinkColumn
<<<<<<< HEAD
          title={`${COMPANY_CATEGORIES[0]} logo`}
=======
          title="YACHTNEEDS logo"
>>>>>>> add-footer
          links={[
            "Shop categories",
            "Bridge",
            "Deck",
            "Engineering",
            "Galley",
            "Interior",
            "Other",
            "Manufacturers",
          ]}
        />

        <LinkColumn
          title="Company"
          links={[
            "About",
            "FAQs & Support",
<<<<<<< HEAD
            `Contact ${COMPANY_CATEGORIES[0]}`,
=======
            "Contact YACHTNEEDS",
>>>>>>> add-footer
            "Collecting your order",
            "Media & marketing opportunities",
            "Free Shipping",
          ]}
        />

        <LinkColumn
          title="Legal info"
          links={[
            "Terms of Service",
            "Refund & Returns",
            "Restrictions & Shipping Conditions",
            "Privacy Policy",
            "Cookie Policy",
          ]}
        />

        <div className="flex flex-col w-full lg:w-1/5 items-center lg:items-start justify-center space-y-2 mt-6 lg:mt-0">
          <h3 className="font-bold">Stay in touch:</h3>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className={`text-${link.color} hover:text-${link.hoverColor}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center flex-wrap mt-10">
        <div className="text-sm text-gray-500 mb-4 md:mb-0 text-center md:text-left">
          {COMPANY_CATEGORIES[1]}
        </div>

        <div className="flex space-x-2 md:space-x-4">
          {paymentIcons.map((icon, index) => (
            <a
              key={index}
              href="#"
              className={`text-${icon.color} hover:text-${icon.hoverColor}`}
            >
              <FontAwesomeIcon
                icon={icon.icon}
                className="w-8 h-8 md:w-12 md:h-12 fill-current"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
