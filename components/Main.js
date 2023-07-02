'use client'

import React, { useState } from 'react'
import Dashboard from './Dashboard'
import DiscussionForm from './DiscussionForm'
import MarketStories from './MarketStories'
import Footer from './Footer'

const Main = () => {

  const [isSelected, setIsSelected] = useState(true)

  const onLeft = () => {
    setIsSelected(true)
  }

  const onRight = () => {
    setIsSelected(false)
  }

  return (
    <div className='flex bg-gray-200 flex-row h-full w-screen'>
      <div className='lg:flex hidden h-screen'>
        <Dashboard />
      </div>
      <div className='lg:hidden flex flex-col w-full h-full'>
        <div className='bg-blue-900 flex items-center w-screen'>
          <div className={`${isSelected ? 'bg-gray-900 border-b-4 border-red-500' : "bg-blue-950"} w-1/2 text-center h-16 flex items-center justify-center`}>
            <button className='font-medium text-xs xs:text-sm' onClick={() => onLeft()} >Disscussion Fourm</button>
          </div>
          <div className={`${isSelected ? 'bg-blue-950' : "bg-gray-900 border-b-4 border-red-500"} w-1/2 text-center h-16 flex items-center justify-center`}>
            <button className='font-medium text-xs xs:text-sm' onClick={() => onRight()}>Market Stories</button>
          </div>
        </div>
        {isSelected ? 
        <div className='w-full bg-gray-200 xs:w-full text-black h-full p-5'>
        <DiscussionForm />
      </div> :  
        <div className='bg-gray-200 w-full pr-7'>
        <MarketStories />
      </div>
      }
      </div>

      <div className="hidden lg:block bg-gray-200 w-2/3 2xl:w-1/2 text-black h-screen">
        <DiscussionForm />
      </div>
      <div className="hidden lg:block bg-gray-200 w-1/3 2xl:w-1/2 pr-7 h-screen">
        <MarketStories />
      </div>

      <div className='fixed bg-blue-900 rounded-full right-6 xs:bottom-4 bottom-8 flex justify-center items-center h-14 w-14'>
        <p className='text-white text-4xl'>+</p>
      </div>


    </div>
  )
}

export default Main