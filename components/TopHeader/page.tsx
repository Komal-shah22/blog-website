import React from "react";
import Link from "next/link";
import Image from "next/image"; 
import logo from "@/public/logo.png"; 
import { BiRightArrowAlt } from "react-icons/bi";

const Head: React.FC = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex items-center justify-between">
        <div className="flex-shrink-0">
          <Image
            src={logo}
            alt="Logo"
            width={180}
            className="w-[130px] sm:w-auto"
            priority
          />
        </div>
        <Link href='/'><button
          className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] hover:shadow-[-5px_5px_0px_#000000] active:shadow-[-3px_3px_0px_#000000] focus:outline-none"
          aria-label="Get started"
        >
          Go Back
          <BiRightArrowAlt />
        </button></Link>
      </div>
    </div>
  );
};

export default Head;
