import React, { useState } from 'react';
import Blogitems from '../Blogitems/page';
import { blog_data } from '../Data/Data';

const Bloglist = () => {
  const [menu, setMenu] = useState('All');
  const filteredBlogs = blog_data.filter((item) => 
    menu === 'All' ? true : item.category === menu
  );

  return (
    <div>
      <div className='flex justify-center gap-6 my-10'>
        {['All', 'Technology', 'Startup', 'Lifestyle'].map((category) => (
          <button
            key={category}
            onClick={() => setMenu(category)}
            className={`py-1 px-4 rounded-sm ${
              menu === category ? 'bg-black text-white' : 'border border-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 px-6'>
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((item) => (
            <Blogitems
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
              id={item.id}
            />
          ))
        ) : (
          <p className='text-center text-gray-500'>No blogs available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Bloglist;


