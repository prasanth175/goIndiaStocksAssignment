import React from 'react'
import { CiSearch } from "react-icons/ci";

import { Sectors } from './Data';

import Content from './Content';

const DiscussionForm = () => {
  return (
    <> 
        <h1 className='hidden lg:block text-red-500 font-bold mb-3 mt-5'>DISCUSSION FORM </h1>
        <div className='flex flex-col 2xs:ml-10 2xs:mr-12 h-full'>
          <h2 className='font-bold self-start'>Filters</h2>
          <div className='flex flex-col xs:flex-row items-center p-4 mt-3 shadow-lg bg-white justify-between w-full rounded-lg'>
          <div className='hidden 3xs:flex items-center w-full justify-between xs:justify-start'>
          {Sectors.map((each) => <p key={each.id} className={`${each.color} text-xs md:text-sm rounded-full pl-4 pr-4 pt-2 pb-2 text-white mr-2`}>{each.text}</p>)}
          </div>
          <div className='3xs:hidden flex items-center w-full justify-between'>
          {Sectors.map((each) => <p key={each.id} className={`${each.color} text-xs md:text-sm rounded-full pl-4 pr-4 pt-2 pb-2 text-white mr-2`}>S {each.text.slice(-1)}</p>)}
          </div>
            <div className='mt-3 xs:mt-0 w-full xs:w-32 p-1 flex items-center sm:p-3 rounded-full shadow-inner bg-gray-300 sm:w-2/5'>
              <CiSearch className='mr-2 h-7 w-7 font-bold' />
              <input className='w-full bg-transparent sm:w-full' placeholder='Search here' />
            </div>
          </div>
          <div className='flex flex-col lg:overflow-y-scroll scrollbar-thin scrollbar-thumb-none h-3/5 mt-3'>
            <Content />
          </div>
        </div>
    </>
  )
}

export default DiscussionForm