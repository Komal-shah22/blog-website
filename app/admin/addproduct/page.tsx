
'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import upload from '@/public/upload.png';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  const [image, setImage] = useState<File | null>(null);
  const [data, setData] = useState({
    title: '',
    description: '',
    category: 'Startup',
    author: 'Alex Bennet',
    authorImg: '/author_img.png',
  });

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('category', data.category);
      formData.append('author', data.author);
      formData.append('authorImg', data.authorImg);
      if (image) {
        formData.append('image', image);
      }

      const response = await axios.post('/api/blog', formData);
      if (response.data.success) {
        toast.success(response.data.msg);
        if (image) {
          URL.revokeObjectURL(URL.createObjectURL(image));
        }
        setImage(null);
        setData({
          title: '',
          description: '',
          category: 'Startup',
          author: 'Alex Bennet',
          authorImg: '/author_img.png',
        });
      } else {
        toast.error('Error occurred while adding blog');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.msg || 'An error occurred while processing your request.');
      } else {
        toast.error('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className=" pt-6 pb-10 min-h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer />
      <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-8 border border-gray-300">
        <form onSubmit={onSubmitHandler}>
          <p className="text-xl">Upload Image</p>
          <label htmlFor="image" className="cursor-pointer" aria-label="Upload Image">
            <Image
              className="mt-4"
              src={image ? URL.createObjectURL(image) : upload}
              width={140}
              height={70}
              alt="Uploaded Image"
            />
          </label>
          <input
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setImage(e.target.files[0]);
              }
            }}
            type="file"
            id="image"
            className="hidden"
            accept="image/*"
          />

          <p className="text-xl mt-4">Blog Title</p>
          <input
            name="title"
            value={data.title}
            onChange={onChangeHandler}
            className="w-full mt-4 px-4 py-3 border rounded"
            type="text"
            placeholder="Type here"
            required
          />

          <p className="text-xl mt-4">Blog Description</p>
          <textarea
            name="description"
            value={data.description}
            onChange={onChangeHandler}
            className="w-full mt-4 px-4 py-3 border rounded"
            placeholder="Write content here"
            rows={6}
            required
          />

          <p className="text-xl mt-4">Blog Category</p>
          <select
            name="category"
            value={data.category}
            onChange={onChangeHandler}
            className="w-full mt-4 px-4 py-3 border rounded text-gray-500"
          >
            <option value="Startup">Startup</option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>

          <button
            className="mt-8 w-full h-12 bg-black text-white rounded hover:bg-gray-800"
            type="submit"
            aria-label="Submit Blog Post"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;





