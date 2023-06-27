import React from 'react'
import {SunIcon} from '@primer/octicons-react'

const Contrast = () => {
  return (

    <button className='flex justify-center items-center flex-col bg-[#1B1B1B] w-[73px] h-[73px] rounded m-2'>
       <SunIcon size={25} className='fill-[#CAC4D0]' />
       <p className='text-[#FFFFFF] text-xs' >Яркость</p>
    </button>
    
  )
}

export default Contrast