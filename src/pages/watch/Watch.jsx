import React from 'react'
import './watch.scss'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import AvatarTrailor from '../../video/avatartrailor.mp4'


function Watch() {
  return (
    <div className='watch'>
      <div className="back">
        <ArrowBackIosNewOutlinedIcon />
        Home
      </div>
      <video className='video' autoPlay progress controls src={AvatarTrailor}/>
    </div>
  )
}

export default Watch