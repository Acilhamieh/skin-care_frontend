'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await fetch('https://skin-care-backend-lav5.onrender.com/api/categories');
        const data = await res.json();
        const matched = data.find(cat => cat.name.toLowerCase() === categoryName);
        setCategory(matched);
      } catch (error) {
        console.error('Error fetching category:', error);
      }
    };

    fetchCategory();
  }, [categoryName]);

  if (!category) return <div className="text-center py-20">Loading...</div>;

  return (
    <section className="py-20 px-6 bg-white min-h-screen flex flex-col items-center overflow-visible">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 font-[Inika] text-gray-900">
        {category.name}
      </h1>

      <div className="flex items-center justify-center max-w-6xl mx-auto gap-36 relative">
        {/* Left Image */}
        <img
          src={category.images[0]?.fileUrl}
          alt="Image 1"
          className="w-[200px] h-[250px] object-cover rounded-[100px] -mt-6 shadow-lg"
          style={{ zIndex: 5 }}
        />

        {/* Description Box */}
        <div
          className="bg-[#FFC8EF]/[0.34] text-center px-8 py-8 rounded-[20px] shadow-lg backdrop-blur-sm relative z-10 max-w-xs"
          style={{
            marginLeft: '-60px',  // more overflow on left side
            marginRight: '-60px', // more overflow on right side
            boxShadow: '0 8px 24px rgba(255, 200, 239, 0.4)',
          }}
        >
          <p className="text-base md:text-lg font-light text-gray-900 leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Right Image */}
        {category.images[1] && (
          <img
            src={category.images[1]?.fileUrl}
            alt="Image 2"
            className="w-[200px] h-[250px] object-cover rounded-[100px] mt-6 shadow-lg"
            style={{ zIndex: 5 }}
          />
        )}
      </div>
    </section>
  );
}
