import React from 'react'
import Addschemes from './Addschemes'
import Allzero from './Allzero'
import Allhundred from './Allhundred'
import Allother from './Allother'

const Mainschemes = () => {
  return (
    <div className='Main_schemes'>
      <Addschemes/>
      <Allzero/>
      <Allhundred/>
      <Allother/>
    </div>
  )
}

export default Mainschemes