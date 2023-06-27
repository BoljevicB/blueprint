import React from 'react'
import {CloudIcon} from '@primer/octicons-react'


const Blur = () => {
  return (
  
    <button className='flex justify-center items-center flex-col bg-[#1B1B1B] w-[73px] h-[73px] rounded m-2'>
       
       <CloudIcon size={25} className='fill-[#CAC4D0]' />
       <p className='text-[#FFFFFF] text-xs' >Размытие</p>
    </button>
    
  )
}

export default Blur