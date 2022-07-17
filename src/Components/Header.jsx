import React from 'react'
import { Link } from 'react-router-dom';

function Header(props) {

    return (
        <div id='main' className='font-serif'>
            <div className='pr-heading name font-serif'>
                <h1><span className='inline-block'>RIDE EXPLORE INSPIRE</span> <span className='text-3xl text-white'>WITH</span> <span className='md:text-6xl text-4xl'>CYCLOLOGY</span></h1>
                {/* <p className='details font-serif'>WI<span className='font-bold'>TH CYCLOL</span>OGY</p> */}
                {localStorage.getItem('token') == null ? (
                    <div className='pr-btns'>
                        <Link to='/login' className='pr-btn font-serif hover:animate-bounce'>JOIN US</Link>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

export default Header;