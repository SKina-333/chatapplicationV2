import React from 'react'
import Topbar from './Topbar'
import MessageBox from './MessageBox'
export default function Chatbox() {
  return (
    <div className='bg-transparent grow flex flex-col'>
        <Topbar />
        <MessageBox />
    </div>
  )
}
