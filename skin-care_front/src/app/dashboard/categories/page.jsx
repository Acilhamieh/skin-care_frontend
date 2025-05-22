'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@/components/Table';
import EntityForm from '@/components/EntityForm';

export default function CategoryDrawer() {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories/`);
      setCategories(res.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleSubmit = async (data) => {
    try {
      const formPayload = new FormData();
      formPayload.append('name', data.name);
      formPayload.append('description', data.description);

      if (data.baseImage) {
        formPayload.append('baseImage', data.baseImage);
      }

      if (data.images && data.images.length > 0) {
        data.images.forEach((img) => formPayload.append('images', img));
      }

      if (data.id) {
        await axios.put(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories/${data.id}`,
          formPayload,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          }
        );
      } else {
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories/addcategory`,
          formPayload,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          }
        );
      }

      setFormData({});
      fetchCategories();
      setIsOpen(false);
    } catch (error) {
      console.error('Error saving category:', error);
    }
  };

  const handleEdit = (category) => {
    setFormData({
      id: category.id,
      name: category.name,
      description: category.description,
      baseImage: null,
      images: [],
    });
    setIsOpen(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories/${deleteId}`);
      fetchCategories();
      setDeleteId(null);
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const columns = [
    { key: 'name', header: 'Name' },
    { key: 'description', header: 'Description' },
    {
      key: 'baseimage',
      header: 'Base Image',
      render: (item) => {
        const src =
          typeof item.baseimage === 'string'
            ? item.baseimage
            : item.baseimage?.fileUrl;
        return src ? (
          <img
            src={src}
            alt="base"
            className="w-12 h-12 object-cover rounded-lg"
          />
        ) : (
          <span className="text-gray-400">—</span>
        );
      },
    },
    {
      key: 'images',
      header: 'Images',
      render: (item) => (
        <div className="flex gap-2">
          {Array.isArray(item.images) &&
            item.images.slice(0, 2).map((img, idx) => (
              <img
                key={idx}
                src={img.fileUrl}
                alt={`cat-img-${idx}`}
                className="w-12 h-12 object-cover rounded-lg"
              />
            ))}
        </div>
      ),
    },
  ];

  const fields = [
    { key: 'name', label: 'Category Name', type: 'text', required: true },
    { key: 'description', label: 'Description', type: 'textarea', required: true },
    { key: 'baseImage', label: 'Base Image', type: 'file', accept: 'image/*' },
    {
      key: 'images',
      label: 'Images (up to 2)',
      type: 'file',
      accept: 'image/*',
      multiple: true,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <button
        onClick={() => {
          setFormData({});
          setIsOpen(true);
        }}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
      >
        + Add Category
      </button>

      {isOpen && (
        <EntityForm
          fields={fields}
          onSubmit={handleSubmit}
          initialData={formData}
          buttonLabel={formData?.id ? 'Update Category' : 'Add Category'}
        />
      )}

      <Table
        columns={columns}
        data={categories}
        onEdit={handleEdit}
        onDelete={(id) => setDeleteId(id)}
      />

      {deleteId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
            <p className="mb-6 text-gray-600">Are you sure you want to delete this category?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
