import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {

    const menuItems = [
    { icon: "ri-fire-fill", label: "Trending" },
    { icon: "ri-bar-chart-fill", label: "Popular" },
    { icon: "ri-movie-2-fill", label: "Movies" },
    { icon: "ri-tv-2-fill", label: "TV Shows" },
    { icon: "ri-group-fill", label: "People" },
  ];
    const botomMenu = [
    { icon: "ri-information-fill", label: "About" },
    { icon: "ri-phone-fill", label: "Contact" },
  ];

  return (
    <div className="h-full w-[20%] border-r-2 border-zinc-700 p-5">
      {/* Logo Section */}
      <h1 className=" text-3xl text-white font-semibold flex items-center gap-2">
        <i className="text-[#6556CD] ri-tv-2-line font-medium"></i>
        <span>SCSDB</span>
      </h1>

      {/* Navigation */}
      <nav className="flex flex-col text-white text-xl gap-3 ">
        <h1 className="text-white font-semibold text-xl mt-6 mb-2">
          New Feeds
        </h1>

        {menuItems.map((item, index) => (
          <Link
            key={index}
            className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2 flex items-center gap-3"
          >
           <i className={`${item.icon} mr-2 text-2xl`}></i>
            {item.label}
          </Link>
        ))}
        <hr className=" border-none h-px bg-zinc-300" />
        <h1 className="text-white font-semibold text-xl mb-2 mt-3">
          Website Info
        </h1>

        {botomMenu.map((item, index) => (
          <Link
            key={index}
            className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2 flex items-center gap-3"
          >
           <i className={`${item.icon} mr-2 text-2xl`}></i>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SideBar;
