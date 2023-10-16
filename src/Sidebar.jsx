import React from 'react';
import {BsPersonSquare,BsQuestionOctagon,BsBoxFill,BsDatabase,BsGrid1X2,BsShop,BsStack} from 'react-icons/bs'

function Sidebar() {
  return (
    <aside id='sidebar'>
        <div className='s-title'>
            <div className='s-icon'>
                <BsBoxFill className='icon_header'/> Dashboard
            </div>
            <span className='close_icon'>X</span>
        </div>
        <ul className='s-li'>
            <li className='s-li-items'>
                <a href=''>
                    <BsGrid1X2 className='icon'/> Dashboard
                </a>
            </li>
            <li className='s-li-items'>
                <a href=''>
                    <BsShop className='icon'/> Product
                </a>
            </li>
            <li className='s-li-items'>
                <a href=''>
                    <BsPersonSquare className='icon'/> Customers
                </a>
            </li>
            <li className='s-li-items'>
                <a href=''>
                    <BsDatabase className='icon'/> Income
                </a>
            </li>
            <li className='s-li-items'>
                <a href=''>
                    <BsStack className='icon'/> Promote
                </a>
            </li>
            <li className='s-li-items'>
                <a href=''>
                    <BsQuestionOctagon className='icon'/> Help
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar