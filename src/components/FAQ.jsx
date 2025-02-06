import React from 'react'
import Accordian from './Accordian'

const FAQ = () => {
  return ( 
    <>
    <div className='bg-blue-800 text-3xl font-bold px-4 flex  justify-center text-white md:text-5xl' >Frequently Asked Question</div>
    <div className='p-4 bg-gradient-to-b from-blue-800 to-indigo-500 w-full h-auto flex  items-center justify-center sm:justify-center   '>
       <div className='p-2 bg-gray-200 rounded-lg md:max-w-screen-lg  md:w-[50%]  '>
         <Accordian title='Do you prefer Android or iOS' answer='I like to use iOS products'/>
         <Accordian title='Do you prefer CSS or Tailwind' answer='I like to write Tailwind'/>
         <Accordian title='React or Flatter' answer='I like to use React'/>
         <Accordian title='Do you prefer Android or iOS' answer='I like to use iOS products I like to use iOS productsI like to use iOS products'/>
         <Accordian title='Do you prefer CSS or Tailwind' answer='I like to write Tailwind I like to write Tailwind I like to write Tailwind'/>
         <Accordian title='React or Flatter' answer='I like to use React I like to use React I like to use React'/>
         <Accordian title='Do you prefer Android or iOS' answer='I like to use iOS products'/>
         <Accordian title='Do you prefer CSS or Tailwind' answer='I like to write Tailwind'/>
         <Accordian title='React or Flatter' answer='I like to use React'/>
    </div>
    </div>
    </>
  )
}

export default FAQ