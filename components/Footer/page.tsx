import Image from 'next/image'
import React from 'react';
import logo from '@/public/logo.png';
import { FaRegCopyright } from "react-icons/fa";
import { FaFacebookF,FaYoutube,FaTwitter,FaInstagram,FaTiktok} from "react-icons/fa";
import Link from 'next/link';


const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row  bg-black py-5 items-center'>
     <Image src={logo} alt='logo' width={80}/>
     <p className=' flex text-sm text-white'>All right reserved. Copyright<FaRegCopyright className='flex mt-1 ml-1 mr-1'/>bloger</p>
     <div className='flex  gap-2'>
     <Link href='#' target='_blank'><FaFacebookF className='text-white w-8 h-8 rounded-full bg-blue-800 p-1'/></Link>
        <Link href='#' target='_blank'><FaYoutube className='text-white w-8 h-8 rounded-full bg-red-600 p-1'/></Link>
        <Link href='#'><FaTwitter className='text-white w-8 h-8 rounded-full bg-blue-400 p-1'/></Link>
        <Link href='#' target='_blank'><FaInstagram className='instagram text-white w-8 h-8 rounded-full p-1'/></Link>
        <Link href='#' target='_blank'><FaTiktok className='text-white w-8 h-8 rounded-full bg-black p-1'/></Link>
     </div>
    </div>
  )
}

export default Footer