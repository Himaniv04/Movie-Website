import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axois"; 

const TopNav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const GetSearches = async () => {
    if (query.trim() === "") {
      setSearches([]);
      return;
    }

    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results || []);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-[50%] h-[6vh] relative flex justify-start items-center mt-10 px-6 mx-[25%] border-zinc-500 rounded-3xl border-2">
      {/* 🔍 Search Icon */}
      <i className="text-zinc-400 text-2xl ri-search-line"></i>

      {/* 🔤 Input Field */}
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-full text-zinc-200 p-4 text-lg outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
      />

      {/* ❌ Clear Icon */}
      {query.length > 0 && (
        <i
          className="text-zinc-400 text-2xl ri-close-fill cursor-pointer"
          onClick={() => setQuery("")}
        ></i>
      )}

      {/* 🔽 Search Results */}
      {query.length > 0 && searches.length > 0 && (
        <div className="absolute w-[80%] max-h-[50vh] ml-10 bg-zinc-200 top-[99%] rounded-b-lg overflow-auto shadow-lg z-10">
          {searches.map((s, i) => (
            <Link
              key={i}
              className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 p-2 px-5 flex justify-start items-center border-b-2 border-zinc-100"
            >
              <img
                src={
                  s.poster_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/w200${
                        s.poster_path || s.profile_path
                      }`
                    : "https://via.placeholder.com/50x70"
                }
                alt={s.name || s.title || "img"}
                className="w-[50px] h-[50px] object-cover rounded mr-4"
              />
              <span>{s.name || s.title || s.original_name || s.original_title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopNav;
