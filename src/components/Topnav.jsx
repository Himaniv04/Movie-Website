import axios from "../utils/axois";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/no_image.jpg";

function Topnav() {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-[50%] h-[7vh] relative flex mx-auto  items-center rounded-full my-3 border-2 border-zinc-400">
      <i className="text-3xl text-zinc-400 ri-search-line mx-6"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[78%] text-white text-xl outline-none border-none bg-transparent "
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className=" text-3xl text-zinc-400 ri-close-fill right-0"
        ></i>
      )}

      <div className="z-11 w-[78%] max-h-[50vh] bg-zinc-200 absolute top-full left-[11%] overflow-auto ">
        {searches.map((s, i) => (
          <Link
            to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-full p-2 flex justify-start items-center border-b-2 border-zinc-100 "
          >
            <img
              className="w-[8vh] h-[8vh] ml-6 object-cover rounded mr-5 shadow-lg "
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Topnav;
