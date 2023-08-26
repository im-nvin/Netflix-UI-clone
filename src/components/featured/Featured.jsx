import './featured.scss'
import avatar from '../../images/avatar.webp'
import AvatarTitle from '../../images/avatartitle.png'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
function Featured({type}) {
  return (
    <div className='featured'>
    {type && (
      <div className="category">
        <span>{type==='movie' ?"Movies":"Series"}</span>
        <select name="genre" id="genre">
          <option>Genre</option>
          <option value="adventure">adventure</option>
          <option value="sci-fi">Sci-fi</option>
          <option value="comedy">Comedy</option>
          <option value="action">Action</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
          <option value="drama">Drama</option>
        </select>
      </div>
      )}  


      <img src={avatar} />

      <div className="info">

        <img src={AvatarTitle} alt="" />

        <span className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non omnis amet quos vero sint beatae excepturi! Ea eligendi, vitae eius numquam veniam blanditiis!
        </span>

        <div className="buttons">
          <button className='play'><PlayArrowIcon /><span>Play</span></button>
          <button className="more"><InfoOutlinedIcon /><span>Info</span></button>
        </div>

      </div>
    </div>
  )
}

export default Featured