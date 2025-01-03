
'use client';
import { blog_data } from '@/components/Data/Data';
import React, { useEffect, useState } from 'react';
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

interface Blog {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
}

const Page: React.FC<PageProps> = ({ params }) => {
  const [data, setData] = useState<Blog | null>(null); 
  const [error, setError] = useState<string | null>(null); 
  const [id, setId] = useState<string | null>(null); 

  useEffect(() => {
    const unwrapParams = async () => {
      try {
        const resolvedParams = await params;
        setId(resolvedParams.id); 
      } catch (err) {
        setError('Failed to resolve params');
      }
    };

    unwrapParams();
  }, [params]);

  useEffect(() => {
    if (id) {
      const blog = blog_data.find(item => item.id === Number(id));
      if (blog) {
        setData(blog);
      } else {
        setError('Blog not found');
      }
    }
  }, [id]);

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto p-6">
      {data ? (
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-4">
          <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
          <img
            className="w-full h-60 object-cover rounded-md mb-4"
            src={data.image}
            alt={data.title}
          />
          <p className="text-gray-700 mb-4">{data.description}</p>
          <span className="inline-block bg-black text-white text-sm px-3 py-1 rounded">
            {data.category}
          </span>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading blog...</p>
      )}
    </div>
  );
};

export default Page;
