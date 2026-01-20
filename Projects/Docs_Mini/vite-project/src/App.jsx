import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'
import Card from './components/Card'

function App() {

  return (
    <div className='relative  justify-center w-full h-screen bg-zinc-900'>
      <Background />
      <Foreground />


    </div>
  )
}

export default App