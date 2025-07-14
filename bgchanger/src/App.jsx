import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
    <div className=' w-full h-screen' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shawod-lg bg-white px-3 py-2 rounded-3xl'>
      <button onClick={()=> setColor('red')}
      className='outlint-none px-4 py-2  rounded-full text-white shadow-lg' style={{backgroundColor: 'red'}}
      >red</button>
      <button onClick={()=>setColor('green')}
      className='outlint-none px-4 py-2  rounded-full text-white shadow-lg' style={{backgroundColor: 'green'}}
      >green</button>
      <button onClick={()=>setColor('blue')}
      className='outlint-none px-4 py-2  rounded-full text-white shadow-lg' style={{backgroundColor: 'blue'}}
      >blue</button>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
