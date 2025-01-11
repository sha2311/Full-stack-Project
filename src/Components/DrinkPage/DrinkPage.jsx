import React from 'react'
import DrinkHero from './DrinkHero'
import FindDrink from './FindDrink'
import Resturent from '../Common/Resturent'

const DrinkPage = () => {
  return (
    <main className='w-full mx-auto'>
    <DrinkHero/>
    <FindDrink/>
    <Resturent title="Popular restaurants in Lagos" />
    </main>
  )
}

export default DrinkPage