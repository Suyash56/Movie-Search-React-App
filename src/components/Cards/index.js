import React from "react";

function Cards({ Title, Director, Imdb, Genre, Poster }) {
  return (
    <div class="w-full lg:w-2/5 p-3 lg:h-full">
      <div class="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-50 border shadow shadow-lg">
        <img
          class="block h-auto w-full lg:w-48 flex-none bg-cover h-24"
          src={Poster}
          alt="poster"
        />
        <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="text-black font-bold text-xl mb-2">{Title}</div>
          <p>
            Directed by:
            <br />
            <b>{Director}</b>
          </p>
          <p>
            IMDB
            <br />
            <b>{Imdb}</b>
          </p>
          <p>
            Genere
            <br />
            <b>{Genre}</b>
          </p>
          {/* <p class="text-grey-darker text-base">Read more</p> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
