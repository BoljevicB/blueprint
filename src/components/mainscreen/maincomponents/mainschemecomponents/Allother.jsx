import React from 'react'
import '../../mainscreen.css'
import {TrashIcon, PencilIcon} from '@primer/octicons-react'
import { IconButton } from '@mui/material'


const Allother = () => {
  return (
    <div className='all_other_node'>
      <IconButton>
        <TrashIcon size={20} fill='#CAC4D0' />
        </IconButton>
        <div className='all_other_text'>
            <p>Прочее</p>
      <IconButton>
        <PencilIcon size={20} fill='#CAC4D0' />
        </IconButton>
        </div>
    </div>
  )
}

export default Allother