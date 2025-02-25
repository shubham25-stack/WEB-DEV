import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {

  return (
    <>
    <div className='grid grid-cols-3'>
      Hello People
     <RevenueCard title={"Amount Pending"} amount={"98,324,12"} orderCount={13}></RevenueCard>     
     </div>
    </>
  )
}

export default App
