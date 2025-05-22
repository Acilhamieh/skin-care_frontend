import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-gray-800 p-2 rounded"
      >
        <FiMenu size={20} />
      </button>

      {/* Sidebar */}
      <div
        className={`${
          open ? 'translate-x-0' : '-translate-x-full'
        } fixed md:static z-40 w-64 h-screen bg-gray-900 text-white p-4 transition-transform duration-300 ease-in-out`}
      >
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
        <nav className="flex flex-col space-y-4">
          <Link href="/dashboard/users">
            <span className="hover:text-pink-400 cursor-pointer">Manage Users</span>
          </Link>
          <Link href="/dashboard/categories">
            <span className="hover:text-pink-400 cursor-pointer">Manage Categories</span>
          </Link>
          <Link href="/dashboard/sessions">
            <span className="hover:text-pink-400 cursor-pointer">Manage Sessions</span>
          </Link>
          <Link href="/dashboard/bookings">
            <span className="hover:text-pink-400 cursor-pointer">Manage Bookings</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
