import React from "react";
import Searchbar from "../Searchbar";

export default function SearchPage(props) {
  return (
    <>
      <p className="text-center my-10 text-3xl font-medium">Explore movies</p>
      <div className="boxed ">
        <Searchbar />
      </div>
    </>
  );
}

// <div class="container my-12 mx-auto px-4 md:px-12">
// <div class="flex flex-wrap -mx-1 lg:-mx-4">
