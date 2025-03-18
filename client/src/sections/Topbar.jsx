import React from 'react'

export default function Topbar() {
  return (
    <div className='bg-linear-106 from-[#D0DDE3] to-[#DBDBEA] w-full px-8 py-3 flex flex-row items-center gap-5'>
        <div className='w-[70px] h-[70px] rounded-full bg-gray-500'></div>
        <div className='font-Poppins text-xl font-medium text-[#565555]'>username</div>
    </div>
  )
}
