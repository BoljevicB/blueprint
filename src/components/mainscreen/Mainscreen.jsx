import React from 'react'
import './mainscreen.css'
import Mainleftpanel from '../mainscreen/maincomponents/Mainleftpanel'
import Mainprojects from '../mainscreen/maincomponents/mainprojectcomponents/Mainprojects'
import Maingreyline from './maincomponents/Maingreyline'
import Mainschemes from './maincomponents/mainschemecomponents/Mainschemes'

const Mainscreen = () => {
  return (
    <div className='Mainscreen'>

        <Mainleftpanel/>

        <div>
        <Mainprojects/>
        <Maingreyline/>
        <Mainschemes/>
        </div>


    </div>
  )
}

export default Mainscreen