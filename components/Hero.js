import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import Link from 'next/link';
import ProductOne from "../public/sliderImages/ProductOne.jpg";
import ProductTwo from "../public/sliderImages/ProductTwo.jpg";
import ProductThree from "../public/sliderImages/ProductThree.jpg";
import Picture from "../public/home.png";
import  Timer  from './Timer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// var settings = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   autoplay: true,
//   autoplaySpeed: 2500,
//   slidesToShow: 1,
//   slidesToScroll: 1
// };

const Hero = () => {
  return (
    <div className='w-screen flex justify-center relative z-0'>

        <Image alt='picture' src={Picture} width='500' height='700' />

        <div className='absolute z-10 inset-0'>

          <Timer />

        </div>
  
    </div>
  );
};

export default Hero;

    //   {/* <Slider {...settings}>
    //     <div className='flex items-center justify-center w-screen bg-fixed bg-center'>
    //       {/* Overlay */}
    //       {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' /> */}
    //       <Image src={ProductOne} alt='ooo' />
    //       <div className='absolute p-5 text-red-800 z-[2] top-[30%] border-4 border-red-800 left-[35%] text-center'>
    //         <h2 className='text-5xl font-bold'>{heading}</h2>
    //         <p className='py-5 text-xl'>{message}</p>
    //       </div>
    //     </div>
    //     <div className='flex items-center justify-center w-screen bg-fixed bg-center'>
    //       {/* Overlay */}
    //       {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' /> */}
    //       <Image src={ProductTwo} alt='ooo' />
    //       <div className='absolute p-5 text-white z-[2] top-[30%] border-4 border-white left-[40%] text-center'>
    //         <h2 className='text-5xl font-bold'>More stuff</h2>
    //         <p className='py-5 text-xl'>stuff</p>
    //       </div>
    //     </div>
    // </Slider> */}