'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://skin-care-backend-lav5.onrender.com/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // ⚠️ this allows cookie to be stored
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Login failed');

      const data = await res.json(); // contains the user
      const role = data.user?.role;

      toast.success('Login successful! Redirecting...');

      setTimeout(() => {
        // 🔁 Redirect based on role
        if (role === 'admin') {
          router.push('/dashboard');
        } else {
          router.push('/');
        }
      }, 1500);
    } catch (err) {
      console.error(err);
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('https://i.ibb.co/cXk4Xz3r/Rectangle-5.png')" }}
    >
      <div className="flex bg-white bg-opacity-90 rounded-[20px] overflow-hidden shadow-lg w-full max-w-md mt-16 md:mt-7">
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
          <p className="mt-4 text-sm text-center text-gray-700">
            Don't have an account?{' '}
            <a href="/register" className="text-black underline">Create one</a>
          </p>
        </div>
      </div>
    </div>
  );
}
