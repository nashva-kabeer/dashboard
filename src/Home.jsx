import React from 'react'
import {FaHandHoldingDollar,FaWallet} from 'react-icons/fa6';
import {RiFileList3Fill} from 'react-icons/ri';
import {PiHandbagFill,PiHandWavingDuotone} from 'react-icons/pi';
import {BsArrowUpShort,BsArrowDownShort} from 'react-icons/bs';
import BarChart from './Barchart';
import PieChart from './Piechart';
import Tables from './Table';

function Home() {
  return (
    <main className='container'>
        <div className='container-title'>
            <h4>Hello Shahrukh<PiHandWavingDuotone className='hand-icon'/>,</h4>
        </div>
        <div className='container-cards'>
            <div className='card'>
                <div className='card-inn'>
                    <FaHandHoldingDollar className='card-icon'/>
                    <div className='card-text'>
                        <p>Earnings</p>
                        <h2>$198k</h2>
                        <p><span><BsArrowUpShort className='arrow'/>37.8%</span> this month</p>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='card-inn'>
                    <RiFileList3Fill className='card-icon1'/>
                    <div className='card-text'>
                        <p>Orders</p>
                        <h2>$2.4k</h2>
                        <p><span><BsArrowDownShort className='arrow'/>2%</span> this month</p>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='card-inn'>
                    <FaWallet className='card-icon2'/>
                    <div className='card-text'>
                        <p>Balance</p>
                        <h2>$2.4k</h2>
                        <p><span><BsArrowDownShort className='arrow'/>2%</span> this month</p>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='card-inn'>
                    <PiHandbagFill className='card-icon3'/>
                    <div className='card-text'>
                        <p>Total Sales</p>
                        <h2>$89k</h2>
                        <p><span><BsArrowUpShort className='arrow'/>11%</span> this month</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='charts'>
            <BarChart/>
            <PieChart/>
            <Tables/>
        </div>
    </main>
  )
}

export default Home