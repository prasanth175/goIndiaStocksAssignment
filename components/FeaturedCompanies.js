/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {companiesImages} from './Data'

const FeaturedCompanies = () => {
  return (
    <div className='bg-white'>
        <h1 className='hidden lg:block text-red-500 font-bold text-lg pl-3 pt-1 pb-1'>FEATURED COMPANIES</h1>
        <div className='[&::-webkit-scrollbar]:hidden flex items-center overflow-x-scroll p-3 bg-blue-50'>
          {companiesImages.map((each) => 
           <img className='mr-7 border-2 border-red-500 xs:border-0 rounded-full xs:rounded-none flex items-center justify-center' key={each.id} src={each.imageUrl} alt='company-logo' height={110} width={110} />
          )}
        </div>
    </div>
  )
}

export default FeaturedCompanies