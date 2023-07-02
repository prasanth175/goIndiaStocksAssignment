import React from 'react';
import { MarketData } from './Data';

const MarketStories = () => {
  return (
    <>
      <h1 className='text-red-500 font-bold mb-10 mt-5 ml-10 lg:ml-0'>MARKET STORIES</h1>
      <div className='flex flex-wrap justify-around lg:justify-between h-4/5 overflow-y-scroll [&::-webkit-scrollbar]:hidden'>
        {MarketData.map((each) => (
          <div
            key={each.id}
            className='mb-7 rounded-lg w-60 h-36 2xs:h-44 2xs:w-80 relative overflow-hidden bg-center bg-cover'
            style={{ backgroundImage: `url(${each.backgroundImg})` }}
          >
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <p className='absolute inset-0 text-white flex items-end z-10 p-3 pl-5 pr-7 text-xs 2xs:text-sm'>
              {each.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MarketStories;
