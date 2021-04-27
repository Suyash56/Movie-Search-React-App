import React from "react";

function Cards({ Title, Year, Poster }) {
  return (
    <div class="w-full lg:w-2/5 p-3 lg:h-full">
      <div class="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-40 border shadow shadow-lg">
        <img
          class="block h-auto w-full lg:w-40 flex-none bg-cover h-24"
          src={Poster}
          alt="poster"
        />
        <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="text-black font-bold text-xl mb-2">{Title}</div>
          <p>
            Year
            <br />
            <b>{Year}</b>
          </p>
          {/* <p class="text-grey-darker text-base">Read more</p> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
