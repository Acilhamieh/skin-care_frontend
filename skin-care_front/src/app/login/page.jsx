'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Login failed');
      setMessage('Login successful!');
    } catch (err) {
      console.error(err);
      setMessage('Login failed.');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('https://i.ibb.co/cXk4Xz3r/Rectangle-5.png')" }}
    >
      <div className="flex bg-white bg-opacity-90 rounded-[20px] overflow-hidden shadow-lg w-full max-w-md mt-16 md:mt-7">
        
        {/* Right form - 100% (No left image) */}
        <div className="w-full p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Log in </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-black"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm text-gray-600 mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-black"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-400 text-white font-medium py-2 rounded-full hover:bg-gray-500 transition"
            >
              Log In
            </button>
          </form>
          {message && (
            <p className="text-sm text-center mt-4 text-gray-700">{message}</p>
          )}
          <p className="mt-4 text-sm text-center text-gray-700">
            Don't have an account?{' '}
            <a href="/register" className="text-black underline">Create one</a>
          </p>
        </div>
      </div>
    </div>
  );
}
