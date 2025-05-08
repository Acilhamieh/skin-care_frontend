'use client';

import { useState } from 'react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: '',
    phone: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      age: Number(formData.age),
      role: 'user',
    };

    if (payload.age < 1) {
      setMessage('Age must be greater than 0.');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Registration failed');
      setMessage('Account created successfully!');
    } catch (err) {
      console.error(err);
      setMessage('Registration failed.');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('https://i.ibb.co/DHpWWnHx/Background.png')" }}
    >
      <div className="flex bg-white bg-opacity-90 rounded-[20px] overflow-hidden shadow-lg w-full max-w-4xl mt-16 md:mt-7">
        
        {/* Left image - 35% */}
        <div className="w-[35%] hidden md:block">
          <img
            src="https://i.ibb.co/KjTL8sQx/Image-18.png"
            alt="Visual"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right form - 65% */}
        <div className="w-full md:w-[65%] p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Create an account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fn" className="block text-sm text-gray-600 mb-1">First Name</label>
              <input
                type="text"
                id="fn"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-black"
              />
            </div>
            <div>
              <label htmlFor="ln" className="block text-sm text-gray-600 mb-1">Last Name</label>
              <input
                type="text"
                id="ln"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-black"
              />
            </div>
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
            <div>
              <label htmlFor="age" className="block text-sm text-gray-600 mb-1">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder="Age"
                min="1"
                value={formData.age}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-black"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm text-gray-600 mb-1">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-black"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-400 text-white font-medium py-2 rounded-full hover:bg-gray-500 transition"
            >
              Create an account
            </button>
          </form>
          {message && (
            <p className="text-sm text-center mt-4 text-gray-700">{message}</p>
          )}
          <p className="mt-4 text-sm text-center text-gray-700">
            Already have an account?{' '}
            <a href="/login" className="text-black underline">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
}
