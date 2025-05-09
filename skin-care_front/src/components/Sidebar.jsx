import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
      <nav className="flex flex-col space-y-4">
        <Link href="/dashboard/categories">
          <span className="hover:text-pink-400 cursor-pointer">Manage Categories</span>
        </Link>
        {/* Add more links later if you want */}
      </nav>
    </div>
  );
}
