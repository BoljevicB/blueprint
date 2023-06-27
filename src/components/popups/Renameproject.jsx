import React from 'react'
import './popups.css'
import Textfield from '../buttonsandsliders/Textfield'
import Save from '../buttonsandsliders/Save'


const Renameproject = () => {
  return (
    <div className='rename_new_project'>
        <div className='heading_new_project_rename_and_text'>
        <h2>Переименовать проект</h2>
        <Textfield/>
        </div>

        <div className='save_new_project_rename'>
        <Save/>
        </div>
    </div>
  )
}

export default Renameproject