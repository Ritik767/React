// import React from "react";
import { navList } from "./Nav";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed bg-white h-screen top-0 overflow-hidden duration-300 left-0 z-10 ${
        isOpen ? "w-64" : "w-0"
      }`}
    >
      <ul className="flex flex-col justify-start h-full items-center gap-4 text-white font-medium bg-[#313638] pt-6">
        {navList.map((item, index) => {
          return (
            <li key={index} className="cursor-pointer">
              {item?.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;