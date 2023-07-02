import React from 'react'
import { stocksData } from './Data'

const Stocks = () => {
  return (
    <div className='flex items-center bg-black w-screen h-7 overflow-x-scroll [&::-webkit-scrollbar]:hidden'>
        {stocksData.map((each) => 
        <div key={each.id}>
            <div className='flex items-center'>
                <p className='mr-5 text-xs text-white'>{each.name}</p>
                <p className='mr-5 text-xs text-white'>{each.amount}</p>
                <p className={`${each.color} text-xs mr-7`}>{each.percentage}</p>
            </div>
        </div>
        
        )}
    </div>
  )
}

export default Stocks