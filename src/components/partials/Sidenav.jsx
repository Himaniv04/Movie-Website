import React from "react";
import { Link } from "react-router-dom";

function Sidenav() {

  const mainLinks = [
    { to: "/trending", icon: "ri-fire-fill", label: "Trending" },
    { to: "/popular", icon: "ri-magic-fill", label: "Popular" },
    { to: "/movie", icon: "ri-movie-2-line", label: "Movies" },
    { to: "/tv", icon: "ri-tv-line", label: "TV Shows" },
    { to: "/person", icon: "ri-user-5-line", label: "People" }
  ];

  const infoLinks = [
    { to: "/about", icon: "ri-information-line", label: "About Netlix" },
    { to: "/contact", icon: "ri-contacts-line", label: "Contact Us" }
  ];

  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-3 overflow-auto">
      <h1 className="text-3xl mt-2 text-white font-bold">
        <i className="text-[#6556cd] ri-tv-fill mr-2"></i>
        <span className="text-3xl">NetLix</span>
      </h1>

      {/* Main Navigation */}
      <nav className="flex flex-col text-zinc-400 text-xl gap-1 pb-2">
        <h1 className="text-white font-semibold text-xl mt-8 mb-2">
          New Feeds
        </h1>

        {mainLinks.map((item, i) => (
          <Link
            key={i}
            to={item.to}
            className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-5"
          >
            <i className={`mr-2 ${item.icon}`}></i>
            {item.label}
          </Link>
        ))}
      </nav>

      <hr className="border-none h-[.5px] bg-zinc-400" />

      {/* Info Navigation */}
      <nav className="flex flex-col text-zinc-400 text-xl gap-1">
        <h1 className="text-white font-semibold text-xl mt-8 mb-2">
          Website Info.
        </h1>

        {infoLinks.map((item, i) => (
          <Link
            key={i}
            to={item.to}
            className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-5"
          >
            <i className={`mr-2 ${item.icon}`}></i>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Sidenav;
