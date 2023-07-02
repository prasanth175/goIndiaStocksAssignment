/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { BiSolidUserCircle } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className='bg-white p-3 flex items-center justify-between'>
        <div className='flex items-center w-full  md:w-1/2 mr-3'>
            <img src='https://www.goindiastocks.com/Content/assets/images/logewithname.png' alt='company-logo' width={50} height={50} />
            <div className='rounded-md w-full bg-gradient-to-r from-gray-500 to-gray-400 flex items-center justify-between ml-5 md:ml-10 shadow-inner pr-2'>
                <input type='text' className='bg-gray-400 w-full text-black p-1 outline-none' />
                <CiSearch className='text-gray-900 h-5 w-5' />
            </div>
        </div>
        <div className='hidden md:flex items-center text-black'>
                <p className='mr-5'>Contact Us</p>
                <button className='border border-gray pt-2 pb-2 pl-4 pr-4 mr-5 rounded-sm' type='button'>SIGN UP</button>
                <button className='border border-gray pt-2 pb-2 pl-4 pr-4 mr-5' type='button'>SIGN IN</button>
            </div>
            <BiSolidUserCircle className='md:hidden h-16 w-16 text-black mr-5' />
    </div>
  )
}

export default Navbar