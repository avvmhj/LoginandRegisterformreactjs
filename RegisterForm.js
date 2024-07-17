import React from 'react';

const RegisterForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm mb-1">Username:</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Email:</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Password:</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded"
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Confirm Password:</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded"
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
