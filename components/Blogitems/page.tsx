import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiRightArrowAlt } from "react-icons/bi";

interface BlogItemProps {
  title: string;
  description: string;
  category: string;
  image: string; 
  id:number | string;
}

const Blogitems: React.FC<BlogItemProps> = ({ title, description, category, image, id }) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
      <Link href={`/blogs/${id}`}>
      <Image src={image} alt={title} width={400} height={400} className='border-b border-black' />
      </Link>
      <p className='ml-5 mt-5 px-1 inline-block text-sm font-medium bg-black text-white'>{category}</p>
      <div className="p-5">
        <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
        <p className='mb-3 text-sm tracking-tight text-gray-700'>{description}</p>
        <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
          Read more <BiRightArrowAlt className='ml-2 mt-1' />
        </Link>
      </div>
    </div>
  );
};

export default Blogitems;








// import React, { useState } from 'react';
// import Blogitems from '../Blogitems/page';
// import { blog_data } from '../Data/Data';

// const Bloglist = () => {
//   const [menu, setMenu] = useState("All");

//   return (
//     <div>
//       {/* Category Buttons */}
//       <div className='flex justify-center gap-6 my-10'>
//         <button onClick={() => setMenu('All')} className={menu === 'All' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>All</button>
//         <button onClick={() => setMenu('Technology')} className={menu === 'Technology' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Technology</button>
//         <button onClick={() => setMenu('Startup')} className={menu === 'Startup' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Startup</button>
//         <button onClick={() => setMenu('Lifestyle')} className={menu === 'Lifestyle' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>Lifestyle</button>
//       </div>

//       {/* Blog Items Grid */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 mb-16'>
//         {blog_data
//           .filter(item => menu === 'All' ? true : item.category === menu)
//           .map((item, index) => (
//             <Blogitems 
//               key={index} 
//               title={item.title} 
//               description={item.description} 
//               category={item.category} 
//               image={item.image} 
//             />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Bloglist;

