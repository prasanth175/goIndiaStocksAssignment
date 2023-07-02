import React from 'react'

import { MdOutlineWidgets } from "react-icons/md";
import { BsBoundingBox } from "react-icons/bs";
import { BiHomeAlt2 } from "react-icons/bi";
import { TbMessages } from "react-icons/tb";
import { FcTodoList } from "react-icons/fc";

const Footer = () => {
  return (
    <div className='xs:hidden flex justify-between items-center fixed bottom-0 w-screen bg-blue-950 p-3 z-50 pr-5'>
        <MdOutlineWidgets />
        <BsBoundingBox />
        <BiHomeAlt2 className='border-b-2 border-red-500' />
        <TbMessages />
        <FcTodoList />

    </div>
  )
}

export default Footer