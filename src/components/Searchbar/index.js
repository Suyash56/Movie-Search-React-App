import React, { useEffect, useState } from "react";
import Cards from "../Cards";
import defaultData from "../../sampleData.json";

export default function SearchBar() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [id, setId] = useState("");

  const [data, setData] = useState([]);

  const APIKEY = "1b5bfbea";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (year === "" && id === "" && title === "") {
      console.log(title);
      fetch(
        `http://www.omdbapi.com/?apikey=${APIKEY}&s=${title}&y=${year}&i=${id}&plot=full`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setData(res.Search);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="relative shadow-lg my-10 p-5 rounded-md mx-5">
        <form onSubmit={handleSubmit}>
          <div className="field-group grid grid-cols-2 md:grid-cols-4 gap-4 flex justify-around ">
            <input
              type="search"
              name="s"
              className="py-2 text-sm col-span-2 md:col-auto text-gray-600 bg-gray-100 rounded-md px-2  focus:outline-none focus:ring focus:border-purple-600 focus:bg-gray-100 focus:text-gray-900"
              placeholder="Search Title"
              autoComplete="off"
              vaue={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <input
              type="search"
              name="y"
              className="py-2 text-sm text-gray-600 bg-gray-100 rounded-md px-2  focus:outline-none focus:ring focus:border-purple-600 focus:bg-gray-100 focus:text-gray-900"
              placeholder="Year"
              autoComplete="off"
              value={year}
              onChange={(e) => {
                setYear("");
              }}
            />
            <input
              type="search"
              name="i"
              className="py-2 text-sm  text-gray-600 bg-gray-100 rounded-md px-2  focus:outline-none focus:ring focus:border-purple-600 focus:bg-gray-100 focus:text-gray-900"
              placeholder="ID"
              autoComplete="off"
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <button
              type="submit"
              className=" w-1/5 search-btn text-white font-bold p-1 rounded col-span-2 md:col-auto bg-yellow-400 focus:outline-none focus:shadow-outline"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-wrap justify-between">
        {title === "" && year === "" && id === ""
          ? defaultData.Search.map((ele) => {
              return (
                <Cards
                  Title={ele.Title}
                  Director={ele.Director}
                  Imdb={ele.imdbRating}
                  Genre={ele.Genre}
                  Poster={ele.Poster}
                />
              );
            })
          : data.map((ele) => {
              return (
                <Cards
                  Title={ele.Title}
                  Director={ele.Director}
                  Imdb={ele.imdbRating}
                  Genre={ele.Genre}
                  Poster={ele.Poster}
                />
              );
            })}
      </div>
    </>
  );
}
