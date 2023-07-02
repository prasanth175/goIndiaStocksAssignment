/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FcLike } from "react-icons/fc";
import { AiOutlineEye } from "react-icons/ai";
import { BiComment, BiSolidUserCircle } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";
import { GiSelfLove } from "react-icons/gi";

import { ContentData } from './Data';

const Content = () => {
  return (
        <>
        {ContentData.map((each)=> 
            <div key={each.id} className='bg-white flex flex-col mb-3 mr-3 p-3 rounded-lg'>
            <p className='self-end text-blue-400 font-bold text-xs xs:text-sm'>{each.time}</p>
            {each.contentImg && <img src='https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/infibeamavenues.png' alt='company-img' width={300} height={300} className='self-center' />}
            <div className='flex items-start'>
                <BiSolidUserCircle className='h-16 w-16' />
                <div className='ml-3 w-4/5'>
                    <div className='flex items-center'>
                        <h3 className='text-xs 3xs:sm font-medium'>{each.name}</h3>
                        <p className={`${each.color} hidden 2xs:block text-xs md:text-sm text-white mr-2 ml-3 rounded-full pl-4 pr-4 pt-2 pb-2`}>{each.sector}</p>
                        <p className={`${each.color} 2xs:hidden block text-xs md:text-sm text-white mr-2 ml-3 rounded-full pl-4 pr-4 pt-2 pb-2`}>S {each.sector.slice(-1)}</p>
                    </div>
                    <p className='mt-7 text-gray-400 xs:w-4/5 text-xs xs:text-sm'>{each.description}</p>
                    <div className='hidden mt-5 xs:flex items-center justify-between'>
                        <div className='flex items-center'>
                            {each.isLiked ? <FcLike className='mr-3' /> : <GiSelfLove className='mr-3' />}
                            <p className='text-xs sm:text-sm'>2k</p>
                        </div>
                        <div className='flex items-center'>
                            <AiOutlineEye className='mr-3' />
                            <p className='text-xs sm:text-sm'>2k</p>
                        </div>
                        <div className='flex items-center'>
                            <BiComment className='mr-3' />
                            <p className='text-xs sm:text-sm'>2k Comments</p>
                        </div>
                        <div className='flex items-center'>
                            <FiShare2 className='mr-3' />
                            <p className='text-xs sm:text-sm'>Share</p>
                        </div>
                    </div>

                    <div className='xs:hidden mt-5 flex flex-col'>
                    <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center mr-5'>
                            {each.isLiked ? <FcLike className='mr-3' /> : <GiSelfLove className='mr-3' />}
                            <p className='text-xs sm:text-sm'>2k</p>
                        </div>
                        <div className='flex items-center'>
                            <AiOutlineEye className='mr-3' />
                            <p className='text-xs sm:text-sm'>2k</p>
                        </div>
                        </div>
                        <div className='flex items-center justify-between'>
                        <div className='flex items-center mr-5'>
                            <BiComment className='mr-3' />
                            <p className='text-xs sm:text-sm'>2k Comments</p>
                        </div>
                        <div className='flex items-center'>
                            <FiShare2 className='mr-3' />
                            <p className='text-xs sm:text-sm'>Share</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
        </>
  )
}

export default Content