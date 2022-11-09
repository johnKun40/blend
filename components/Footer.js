import React from 'react';
import {MdKeyboardArrowRight} from 'react-icons/md'

function Footer() {
  return (
    <div className='flex flex-row justify-between p-10 border-t-[0.5px] border-t-slate-300 lab '>
        <div className=''>
            <ul>
                <li className='flex items-center'>SHIPPING TO INTERNATIONAL VERSION (CHANGE) <MdKeyboardArrowRight /></li> 
                <li className='flex items-center'>LANGUAGE CHANGE ENGLISH (CHANGE) <MdKeyboardArrowRight /></li> 
            </ul>
        </div>

        <div>
            <ul>
                <li>CLIENT SERVICES</li>
                <li>SHIPPING</li>
                <li>EMAIL</li>
                <li>MAKING AN APPOINTMENT</li>
            </ul>
        </div>

        <div>
            <ul>
                <li>CAREER</li>
                <li>LEGAL SERVICES</li>
                <li>ACCESSIBILITY</li>
            </ul>
        </div>

        <div>
            <ul>
                <li>FACEBOOK</li>
                <li>TWITTER</li>
                <li>INSTAGRAM</li>
            </ul>
        </div>

        <div>
            <ul>
                <li className='flex items-center'>SUBSCRIBE TO THE NEWSLETTER <MdKeyboardArrowRight /></li> 
            </ul>
        </div>
    </div>
  )
}

export default Footer