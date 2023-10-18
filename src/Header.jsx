import React from 'react'
import {BsJustify,BsSearch} from 'react-icons/bs'

function Header() {
  return (
    <header className='header'>
        <div className='main-icon'>
            <BsJustify className='icon'/>
        </div>
        <div className='headers-right'>
            <BsSearch className='icon'/><input type='text' placeholder='Search'/>
        </div>
    </header>
  )
}

export default Header