import React, { useState } from "react";
import { FaShip, FaWrench, FaCog, FaUtensils, FaCouch } from "react-icons/fa";

const menuData = [
  {
    text: "BRIDGE",
    subMenu: [
      {
        text: "Submenu 1-1",
        subSubMenu: [
          { text: "Sub-Submenu 1-1-1", link: "#" },
          { text: "Sub-Submenu 1-1-2", link: "#" },
        ],
      },
      {
        text: "Submenu 1-2",
        subSubMenu: [
          { text: "Sub-Submenu 2-1-1", link: "#" },
          { text: "Sub-Submenu 2-1-2", link: "#" },
        ],
      },
      {
        text: "Submenu 1-3",
        subSubMenu: [
          { text: "Sub-Submenu 3-1-1", link: "#" },
          { text: "Sub-Submenu 3-1-2", link: "#" },
        ],
      },
    ],
  },
  {
    text: "DECK",
    subMenu: [
      {
        text: "Submenu 1-1",
        subSubMenu: [
          { text: "Sub-Submenu 1-1-1", link: "#" },
          { text: "Sub-Submenu 1-1-2", link: "#" },
        ],
      },
      {
        text: "Submenu 1-2",
        subSubMenu: [
          { text: "Sub-Submenu 2-1-1", link: "#" },
          { text: "Sub-Submenu 2-1-2", link: "#" },
        ],
      },
      {
        text: "Submenu 1-3",
        subSubMenu: [
          { text: "Sub-Submenu 3-1-1", link: "#" },
          { text: "Sub-Submenu 3-1-2", link: "#" },
        ],
      },
    ],
  },
  {
    text: "ENGINEERING",
    subMenu: [
      {
        text: "Submenu 1-1",
        subSubMenu: [
          { text: "Sub-Submenu 1-1-1", link: "#" },
          { text: "Sub-Submenu 1-1-2", link: "#" },
        ],
      },
      {
        text: "Submenu 1-2",
        subSubMenu: [
          { text: "Sub-Submenu 2-1-1", link: "#" },
          { text: "Sub-Submenu 2-1-2", link: "#" },
        ],
      },
      {
        text: "Submenu 1-3",
        subSubMenu: [
          { text: "Sub-Submenu 3-1-1", link: "#" },
          { text: "Sub-Submenu 3-1-2", link: "#" },
        ],
      },
    ],
  },
  {
    text: "GALLEY",
    subMenu: [
      {
        text: "Submenu 1-1",
        subSubMenu: [
          { text: "Sub-Submenu 1-1-1", link: "#" },
          { text: "Sub-Submenu 1-1-2", link: "#" },
        ],
      },
      {
        text: "Submenu 1-2",
        subSubMenu: [
          { text: "Sub-Submenu 2-1-1", link: "#" },
          { text: "Sub-Submenu 2-1-2", link: "#" },
        ],
      },
      {
        text: "Submenu 1-3",
        subSubMenu: [
          { text: "Sub-Submenu 3-1-1", link: "#" },
          { text: "Sub-Submenu 3-1-2", link: "#" },
        ],
      },
    ],
  },
  {
    text: "INTERIOR",
    subMenu: [
      {
        text: "Submenu 1-1",
        subSubMenu: [
          { text: "Sub-Submenu 1-1-1", link: "#" },
          { text: "Sub-Submenu 1-1-2", link: "#" },
        ],
      },
      {
        text: "Submenu 1-2",
        subSubMenu: [
          { text: "Sub-Submenu 2-1-1", link: "#" },
          { text: "Sub-Submenu 2-1-2", link: "#" },
        ],
      },
      {
        text: "Submenu 1-3",
        subSubMenu: [
          { text: "Sub-Submenu 3-1-1", link: "#" },
          { text: "Sub-Submenu 3-1-2", link: "#" },
        ],
      },
    ],
  },
];

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  return (
    <div className="bg-gray-800 px-5 lg:px-28 align-baseline ">
      {menuData.map((menu, index) => (
        <div
          key={index}
          onMouseEnter={() => setActiveMenu(index)}
          onMouseLeave={() => setActiveMenu(null)}
          className="relative inline-block text-left"
        >
          <button className="text-white text-sm font-bold px-4 py-4 hover:bg-gray-700 flex items-center">
            {getIconForMenu(menu.text)}
            {menu.text}
          </button>

          {activeMenu === index && (
            <div className="origin-top-right absolute w-56 shadow-lg bg-gray-800 z-10 py-1">
              {menu.subMenu.map((sub, sIndex) => (
                <div key={sIndex} onMouseEnter={() => setActiveSubMenu(sIndex)}>
                  <a
                    href={sub.link || "#"}
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                  >
                    {sub.text}
                  </a>
                  {sub.subSubMenu && activeSubMenu === sIndex && (
                    <div className="origin-top-right absolute left-full top-0 w-56 shadow-lg bg-gray-800 z-10">
                      {sub.subSubMenu.map((subSub, ssIndex) => (
                        <a
                          key={ssIndex}
                          href={subSub.link}
                          className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                        >
                          {subSub.text}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function getIconForMenu(menuText) {
  switch (menuText) {
    case "BRIDGE":
      return <FaShip className="mr-2" />;
    case "DECK":
      return <FaWrench className="mr-2" />;
    case "ENGINEERING":
      return <FaCog className="mr-2" />;
    case "GALLEY":
      return <FaUtensils className="mr-2" />;
    case "INTERIOR":
      return <FaCouch className="mr-2" />;
    default:
      return null;
  }
}

export default DropdownMenu;
