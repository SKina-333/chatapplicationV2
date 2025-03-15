import { useState } from 'react';
import AppContainer from './sections/AppContainer.jsx';
import Sidebar from './sections/Sidebar.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='font-Poppins flex flex-row py-8 pl-5 h-screen border border-black gap-8'>
        <Sidebar />
        <AppContainer />
      </div>
    </>
  )
}

export default App
