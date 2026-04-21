"use client";
import React, { useEffect } from "react";

const Error = (error, reset) => {
    
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4 text-red-600">
        Something went wrong!
      </h1>
      <p className="mb-4">{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
