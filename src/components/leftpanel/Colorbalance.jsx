import React from 'react'
import {RepoForkedIcon} from '@primer/octicons-react'

const Colorbalance = () => {
  return (
    
    <button className='flex justify-center items-center flex-col bg-[#1B1B1B] w-[73px] h-[73px] rounded m-2'>
       <RepoForkedIcon size={24} className='fill-[#CAC4D0]' />
       <p className='text-[#FFFFFF] text-xs' >Цв баланс</p>
    </button>
    
  )
}

export default Colorbalance