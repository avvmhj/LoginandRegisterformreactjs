import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="p-4 bg-white shadow-md">
          <div className="container mx-auto flex justify-end space-x-4">
            <Link to="/login" className="px-4 py-2 text-white bg-purple-500 rounded hover:bg-purple-600">
              Login
            </Link>
            <Link to="/register" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
              Register
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
