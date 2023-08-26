import './listitem.scss'
import avatar from '../../images/avatar.webp'
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import { useState } from 'react';
import AvatarTrailor from '../../video/avatartrailor.mp4'

function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false)


  return (
    <div className='listItem' style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img src={avatar} />
      {isHovered && (
        <>
          <video src={AvatarTrailor} autoPlay={true} loop />

          <div className="itemInfo">
            <div className="icons">
              <PlayCircleOutlineOutlinedIcon className='icon' />
              <AddCircleOutlineOutlinedIcon className='icon' />
              <ThumbUpAltOutlinedIcon className='icon' />
              <ThumbDownOffAltOutlinedIcon className='icon' />
            </div>
            <div className="itemInfoTop">
              <span>1 hr 16 min</span>
              <span className='limit'>+13</span>
              <span>2022</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A minima voluptates dolore blanditiis illo recusandae.
            </div>
            <div className="genre">Action</div>
          </div>  </>
      )}
    </div>
  )
}

export default ListItem