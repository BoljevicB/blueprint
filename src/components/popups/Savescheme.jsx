import React from 'react'
import './popups.css'
import Textfield from '../buttonsandsliders/Textfield'
import Save from '../buttonsandsliders/Save'


const Savescheme = () => {
  return (
    <div className='save_scheme'>
        <div className='heading_save_scheme_text'>
        <h2>Сохранить шаблон</h2>
        <Textfield/>
        </div>
        <div className='save_scheme_button'>
        <Save/>
        </div>
    </div>
  )
}

export default Savescheme