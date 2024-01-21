import React from "react";
export const navList = [
  {
    title: "home",
    path: "/home",
  },
  {
    title: "work",
    path: "/work",
  },
  {
    title: "projects",
    path: "/projects",
  },
  {
    title: "about",
    path: "/about",
  },
  {
    title: "contact",
    path: "/contact",
  },
];
const Navbar = ({ setIsOpen }) => {
  return (
    <nav className="bg-blue-100 sticky top-0 py-4 px-[5%] flex items-center gap-4 justify-between">
      <img
        src="https://marketplace.canva.com/EAFwVuBz834/1/0/1600w/canva-abstract-wolf-mascot-esports-gaming-logo-AKnQQS2sHKU.jpg"
        alt=""
        className="h-10 rounded-full"
      />
      <ul className="sm:flex hidden justify-end items-center gap-4 text-gray-700 font-medium">
        {Array.isArray(navList) &&
          navList.map((item, index) => {
            return (
              <li key={index} className="cursor-pointer text-black-500">
                <a href={item?.path}>{item?.title}</a>
              </li>
            );
          })}
      </ul>
      <button
        className="block sm:hidden"
        onClick={() => {
          setIsOpen((pre) => !pre);
        }}
      >
        menu
      </button>
    </nav>
  );
};

export default Navbar;