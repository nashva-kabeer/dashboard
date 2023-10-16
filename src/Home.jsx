import React from 'react'
import {FaHandHoldingDollar,FaWallet} from 'react-icons/fa6';
import {RiFileList3Fill} from 'react-icons/ri';
import {PiHandbagFill,PiHandWavingDuotone} from 'react-icons/pi';
import {BsArrowUpShort,BsArrowDownShort} from 'react-icons/bs';
import Chart from './Chart';

function Home() {
  return (
    <div className='container'>
        <div className='container-head'>
            <h4>Hello Shahrukh<PiHandWavingDuotone className='hand-icon'/>,</h4>
        </div>
        <div className='container-cards'>
            <div className='card'>
                <div className='card-inn'>
                    <FaHandHoldingDollar className='card-icon'/>
                    <div>
                        <p>Earnings</p>
                        <h2>$198k</h2>
                        <p><span><BsArrowUpShort className='arrow'/>37.8%</span> this month</p>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='card-inn'>
                    <RiFileList3Fill className='card-icon'/>
                    <div>
                        <p>Orders</p>
                        <h2>$2.4k</h2>
                        <p><span><BsArrowDownShort className='arrow'/>2%</span> this month</p>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='card-inn'>
                    <FaWallet className='card-icon'/>
                    <div>
                        <p>Balance</p>
                        <h2>$2.4k</h2>
                        <p><span><BsArrowDownShort className='arrow'/>2%</span> this month</p>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='card-inn'>
                    <PiHandbagFill className='card-icon'/>
                    <div>
                        <p>Total Sales</p>
                        <h2>$89k</h2>
                        <p><span><BsArrowUpShort className='arrow'/>11%</span> this month</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Chart/>
        </div>
    </div>
  )
}

export default Home