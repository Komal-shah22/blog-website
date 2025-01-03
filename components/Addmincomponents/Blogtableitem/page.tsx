import Image from 'next/image';
import React from 'react';
import profile_icon from '@/public/profile_icon.png';

interface BlogTableItemProps {
  authorImg?: string;
  title?: string;
  author?: string;
}

const BlogTableItem: React.FC<BlogTableItemProps> = ({ authorImg, title, author }) => {
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 sm:flex px-6 py-4 text-gray-900 whitespace-nowrap font-medium"
      >
        <Image
          width={40}
          height={40}
          src={authorImg ? authorImg : profile_icon}
          alt={author ? `${author}'s profile` : 'Default profile'}
          className="rounded-full"
        />
        <p>{author ? author : 'No author'}</p>
      </th>

      <td className="px-6 py-4">{title ? title : 'No title'}</td>

      <td className="px-6 py-4">{'11 Jan 2024'}</td>

      <td
        className="px-6 py-4 cursor-pointer text-red-500 hover:underline"
        title="Delete this entry"
        role="button"
      >
        x
      </td>
    </tr>
  );
};

export default BlogTableItem;
