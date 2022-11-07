import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import {TbRecycle} from 'react-icons/tb';



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('white');
  const [textColor, setTextColor] = useState('black');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('#ffffff');
        setTextColor('#000000');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div className='fixed flex flex-row justify-between items-center p-6 w-screen'>
      <div className='flex flex-row justify-between text-black w-screen'>
        <div className='flex flex-col h-screen text-black'>
        <Link href='/#'>
          <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl z-20 cursor-pointer'>
            BLEND
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden lab sm:flex flex-col mt-5 cursor-pointer z-20'>
          <li className='mt-3 flex flex-row items-center gap-2'>
            <Link href='/cycleOne'>CYCLE 1</Link> <TbRecycle />
          </li>
          <li className='mt-3 flex flex-row items-center gap-2'>
            <Link href='/cycleTwo'>CYCLE 2</Link> <TbRecycle />
          </li>
        </ul>
        </div>

        

        {/* Mobile Button */}
        <div onClick={handleNav} className='md:hidden z-30 pt-3 pr-3'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 z-20'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 z-20'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/cycleOne'>CYCLE 1</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/cycleTwo'>CYCLE 2</Link>
            </li>
          </ul>
        </div>
      </div>




      <div className='flex-col h-screen text-right hidden md:flex z-30'>

        <AiOutlineSearch className='self-end text-2xl' />

        <ul className='flex flex-col mt-8 lab'>
          <Link href='/#'>
          <li>LOG IN</li>
          </Link>
          <Link href='/#'>
          <li>SERVICES</li>
          </Link>
          <Link href='/#'>
          <li>SUSTAINABILITY</li>
          </Link>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;