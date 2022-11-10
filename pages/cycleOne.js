import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import ProductFour from '../public/pic7.jpg';
import Footer from '../components/Footer';


function cycleOne() {
  return (
<div className='relative z-0'>

<Head>
  <title>blend</title>
  <meta name="description" content="Generated by create next app" />
  <link rel="icon" href="/favicon.ico" />
</Head>

<Navbar />

<div className='absolute z-20 inset-0  flex flex-row justify-center w-screen gap-1 text-black text-sm'>
      <Product image={ProductFour} card_Title='HAND BAG' />
      <Product image={ProductFour} card_Title='HAND BAG' />
      <Product image={ProductFour} card_Title='HAND BAG' />

</div>

<div className='absolute z-20 inset-0  flex flex-row justify-center w-screen gap-1 mt-[480px]'>
      <Product image={ProductFour} card_Title='HAND BAG' />
      <Product image={ProductFour} card_Title='HAND BAG' />
      <Product image={ProductFour} card_Title='HAND BAG' />

</div>

<div className='absolute z-20 inset-0  flex flex-row justify-center w-screen gap-1 mt-[960px]'>
      <Product image={ProductFour} card_Title='HAND BAG' />
      <Product image={ProductFour} card_Title='HAND BAG' />
      <Product image={ProductFour} card_Title='HAND BAG' />

</div>

<div className='absolute z-20 inset-0 mt-[1500px]'>
      <Footer />
      </div>


</div>
  )
}

export default cycleOne
