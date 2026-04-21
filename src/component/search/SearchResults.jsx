"use client";
import { useSearchParams } from "next/navigation";

const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const category = searchParams.get("category");
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Search Results</h1>
      <p>Query: {query}</p>
      <p>Category: {category}</p>
    </div>
  );
};

export default SearchResults;
