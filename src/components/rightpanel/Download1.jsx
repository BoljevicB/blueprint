import React from 'react'
import './component.css'
import {DownloadIcon} from '@primer/octicons-react'
import Imageexample from '../../imgs/image_example.png'


const Download1 = () => {
  return (
    <div className='download_image'>
        <img src={Imageexample} alt="example" />
        <button>
        <DownloadIcon className='download_icon1' size={18} fill='#CAC4D0' />
        </button>
    
    </div>
  )
}

export default Download1