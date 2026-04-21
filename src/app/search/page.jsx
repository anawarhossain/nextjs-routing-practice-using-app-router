import SearchResults from "@/component/search/SearchResults";
import React from "react";

const SearchPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Search Products</h1>
      <form className="space-y-4">
        <input
          type="text"
          name="q"
          placeholder="Search..."
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="w-full border p-2 rounded"
        />
        <button className="bg-blue-600 text-white p-2 rounded">Search</button>
          </form>
          
          <SearchResults/>
    </div>
  );
};

export default SearchPage;
