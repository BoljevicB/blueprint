import React from 'react'
import '../../mainscreen.css'
import {TrashIcon, PencilIcon} from '@primer/octicons-react'
import { IconButton } from '@mui/material'



const Allzero= () => {
  return (
    <div className='all_zero_node'>
      <IconButton>
        <TrashIcon size={20} fill='#CAC4D0' />
        </IconButton>

        <div className='all_zero_text'>
            <p>Все на 0</p>
      <IconButton>
        <PencilIcon size={20} fill='#CAC4D0' />
        </IconButton>
        </div>
    </div>
  )
}

export default Allzero