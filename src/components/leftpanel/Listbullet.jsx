import React from 'react'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


const Listbullet = () => {
  return (
    <button className='w-[27px] h-[25px] rounded-r-md m-2 text-[#CAC4D0] bg-[#403F40]  shadow text-center'>
    <FormatListBulletedIcon 
    sx={{ fontSize: 16, 
    }} 
    />
    </button>
  )
}

export default Listbullet