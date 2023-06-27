import React from 'react'
import {ZapIcon} from '@primer/octicons-react'

const Contrastscalebutton = () => {
  return (

    <button className='flex justify-center items-center flex-col bg-[#1B1B1B] w-[73px] h-[73px] rounded m-2'>
       <ZapIcon size={25} className='fill-[#CAC4D0]' />
       <p className='text-[#FFFFFF] text-xs' >Контраст...</p>
    </button>
    
  )
}

export default Contrastscalebutton