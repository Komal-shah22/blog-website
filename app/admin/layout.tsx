import Sidebar from "@/components/Addmincomponents/Sidebar/page";
import Image from "next/image";
import React from "react";
import profile_icon from "@/public/profile_icon.png";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {/* <div className="flex">
        <ToastContainer theme="dark"/>
        <div className=" flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
            <h3 className="font-extrabold text-4xl">Admin panel</h3>
            <Image src={profile_icon} width={40} alt="profile-icon" />
          </div> */}
          {children}
        {/* </div> */}
      {/* </div> */}
    </> 
  );
}
