import React from "react";

const LoginPage = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
        />
        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
