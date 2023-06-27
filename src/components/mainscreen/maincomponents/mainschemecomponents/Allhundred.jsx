import React from 'react'
import '../../mainscreen.css'
import {TrashIcon, PencilIcon} from '@primer/octicons-react'
import { IconButton } from '@mui/material'


const Allhundred= () => {
  return (
    <div className='all_hundred_node'>
      <IconButton>
        <TrashIcon size={20} fill='#CAC4D0' />
        </IconButton>
        <div className='all_hundred_text'>
            <p>Все на 100</p>
            <IconButton>
        <PencilIcon size={20} fill='#CAC4D0' />
        </IconButton>
        </div>
    </div>
  )
}

export default Allhundred