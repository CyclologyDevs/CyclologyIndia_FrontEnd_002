import React from 'react'
import '../CSS_Style/Loaderstyle.css';
import loaderimg from '../images/loaderimg.gif'

function Loadergif() {
  return (
    <div className='loader-container'>
      <div className='loader'>
        <img src={loaderimg} alt='' />
      </div>

    </div>
  )
}
export default Loadergif
