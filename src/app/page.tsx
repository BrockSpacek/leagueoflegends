import ChampionCardComponent from '@/Components/ChampionCardComponent'
import NavBarComponent from '@/Components/NavBarComponent'
import React from 'react'




const HomePage = () => {
  return (
    <div className='bg-black min-h-screen'>
      <NavBarComponent />

      <div className='text-center text-gray-50 text-4xl font-semibold pt-20'>
        Champions
      </div>
      <ChampionCardComponent />
    </div>
  )
}

export default HomePage