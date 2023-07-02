'use client'

import React, { useState } from 'react'
import { BiSolidRightArrow, BiSolidUser } from "react-icons/bi";
import { HiMiniUser } from "react-icons/hi";
import { MdNotifications } from "react-icons/md";

import { DashboardData } from './Data';

const Dashboard = () => {

    const [isOpened, setIsOpened] = useState(false)

    const sliderBtn = () => {
        setIsOpened(!isOpened)
    }

  return (
    <>
       {isOpened && <div className='bg-blue-950 flex-col w-72 z-10'>
            <div className='flex items-center justify-between p-2'>
                <div className='flex items-center'>
                    <BiSolidUser className='text-white mr-2' />
                    <p className='text-white'>Hello, User</p>
                </div>
                <MdNotifications className='text-white' />
            </div>
            <hr className='text-gray mb-4' />
            {DashboardData.map((each) => 
                <div key={each.id} className={`flex items-center justify-between ${
                    each.isSelected ? 'bg-gray-900' : ''
                }`}>
                    <div className='text-white flex items-center p-2'>
                        {each.leftImg}
                        <p className={`${each.isSelected || each.leftImg ? 'ml-2' : 'ml-4'}`}>{each.text}</p>
                    </div>
                        {each.right && each.right}
                    </div>)}
        </div>} 

        <div className='bg-blue-950 pt-4 pb-4 z-10 self-center'>
             <button type='button' onClick={() => sliderBtn()}>
                <BiSolidRightArrow />
            </button>
        </div>
    </>
  )
}

export default Dashboard