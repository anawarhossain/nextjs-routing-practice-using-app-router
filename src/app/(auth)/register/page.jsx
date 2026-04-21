import React from "react";

const RegisterPage = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 rounded"
        />
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
        <button className="w-full bg-green-600 text-white p-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
