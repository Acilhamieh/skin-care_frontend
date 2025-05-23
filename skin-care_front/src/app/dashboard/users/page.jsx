'use client';
import { useEffect, useState } from 'react';
import Table from '@/components/Table';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/users', {
        withCredentials: true, // ✅ send cookies
      });
      setUsers(res.data);
    } catch (err) {
      console.error('Failed to fetch users:', err);
      if (err.response?.status === 401 || err.response?.status === 403) {
        toast.error('Unauthorized. Redirecting to login...');
        router.push('/login');
      } else {
        toast.error('Something went wrong while fetching users.');
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/users/${id}`, {
        withCredentials: true, // ✅ send cookies
      });
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      console.error('Delete failed:', err);
      toast.error('Failed to delete user.');
    }
  };

  const columns = [
    { key: 'firstName', header: 'First Name' },
    { key: 'lastName', header: 'Last Name' },
    { key: 'email', header: 'Email' },
    { key: 'role', header: 'Role' },
    { key: 'phone', header: 'Phone' },
    { key: 'age', header: 'Age' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <Table 
        columns={columns} 
        data={users} 
        onEdit={undefined} 
        onDelete={handleDelete} 
      />
    </div>
  );
}
