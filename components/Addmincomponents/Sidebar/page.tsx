import React from "react";
import Link from "next/link";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdOutlineUnsubscribe } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col space-y-4 w-full max-w-[500px]">
        <Link
          href="/admin/addproduct"
          className="flex items-center w-full border border-black gap-3 font-medium px-4 py-3 bg-white shadow-[-5px_5px_0px_#000000] hover:shadow-[-3px_3px_0px_#000000] focus:ring-2 focus:ring-black"
          aria-label="Add blogs"
        >
          <IoMdAddCircleOutline className="text-2xl sm:text-4xl" />
          <span>Add Blogs</span>
        </Link>
        <Link
          href="/admin/bloglist"
          className="flex items-center w-full border border-black gap-3 font-medium px-4 py-3 bg-white shadow-[-5px_5px_0px_#000000] hover:shadow-[-3px_3px_0px_#000000] focus:ring-2 focus:ring-black"
          aria-label="Blog list"
        >
          <FaEdit className="text-2xl sm:text-4xl" />
          <span>Blog List</span>
        </Link>
        <Link
          href="/admin/subscription"
          className="flex items-center w-full border border-black gap-3 font-medium px-4 py-3 bg-white shadow-[-5px_5px_0px_#000000] hover:shadow-[-3px_3px_0px_#000000] focus:ring-2 focus:ring-black"
          aria-label="Subscriptions"
        >
          <MdOutlineUnsubscribe className="text-2xl sm:text-4xl" />
          <span>Subscriptions</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;









