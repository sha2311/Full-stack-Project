import React from 'react'
import DrinkHero from './DrinkHero'
import FindDrink from './FindDrink'
import Resturent from '../Common/Resturent'
import Carusol from '../Common/Carusol'
import { drinkData, TagData } from '../../assets/asset'

const DrinkPage = () => {
  return (
    <main className='w-full mx-auto'>
    <DrinkHero/>
    <FindDrink/>
    <Resturent title="Popular restaurants in Lagos" />
    <Carusol newtitle='Upcoming Eat & Drink Events' data={drinkData} tags={TagData} />
    <Resturent title="Resturants nearby" />
    </main>
  )
}

export default DrinkPage