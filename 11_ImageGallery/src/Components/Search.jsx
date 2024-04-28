import React, { useState } from "react";

const Search = ({ searchtext }) => {
  const [text, settext] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchtext(text);
  };
  return (
    <div
      className="p-4  mb-4 flex  flex-col
    items-center justify-center"
    >
      <h1 className="pb-4 text-2xl font-bold">Image Gallery</h1>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => settext(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
