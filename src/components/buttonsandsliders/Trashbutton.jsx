import React from 'react'
import './buttonsandsliders.css'
import {TrashIcon} from '@primer/octicons-react'


const Trashbutton = () => {
  return (
    <button className='trash_button'> 
    <TrashIcon size={16} fill='#BB86FC' /> 
    </button>
  )
}

export default Trashbutton