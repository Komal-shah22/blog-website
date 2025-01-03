'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Header = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    try {
      setIsSubmitting(true);
      const formData = new FormData();
      formData.append('email', email);

      const response = await axios.post('/api/email', formData);

      if (response.data.success) {
        toast.success(response.data.msg);
        setEmail('');
      } else {
        toast.error(response.data.msg || 'Subscription failed. Please try again.');
      }
    } catch (error: any) {
      toast.error(error.response?.data?.msg || 'An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-center my-8">
      <h1 className="text-8xl sm:text-5xl font-extrabold">Latest Blogs</h1>
      <p className="mt-10 max-w-[740px] mx-auto text-xs sm:text-base">
        Stay updated with the latest news and insights. Subscribe to our newsletter today!
        Stay updated with the latest news and insights. Subscribe to our newsletter today!

      </p>
      <form
        onSubmit={onSubmitHandler}
        className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000] hover:shadow-[-5px_5px_0px_#000000] active:shadow-[-3px_3px_0px_#000000] focus:outline-none"
        aria-live="polite"
      >
        <label htmlFor="email" className="sr-only">
          Enter your email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pl-4 outline-none flex-grow focus:ring-2 focus:ring-gray-600"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`border-l border-black py-4 px-4 sm:px-8 ${
            isSubmitting
              ? 'bg-gray-400 text-white cursor-not-allowed'
              : 'hover:bg-gray-600 hover:text-white active:bg-gray-800 active:text-white'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
};

export default Header;








