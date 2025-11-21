import React from "react";
import { Link } from "react-router-dom";
import noimage from "/no_image.jpg";
function Cards({ data, title }) {
  return (
    <div className="flex flex-wrap w-full h-full px-[6%] bg-[#1f1e24]">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          className="relative w-[25.1vh] mr-[3%] mb-6"
          key={i}
        >
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover  "
            src={c.poster_path || c.backdrop_path || c.profile_path ? `https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path || c.profile_path
            }` : noimage}
            alt=""
          />
          <h1 className=" text-lg text-zinc-200 mt-2 font-semibold">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>

          {c.vote_average && (
            <div className="absolute right-[-10%] bottom-[25%] bg-yellow-600 text-lg font-semibold rounded-full text-white w-[6vh] h-[6vh] flex justify-center items-center ">
              {(c.vote_average * 10).toFixed()}
              %
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default Cards;
