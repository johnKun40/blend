import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Product({card_Title, image, prize}) {
  return (
    <div>
        <div className='h-12'>

          
            
            <Link href='/productDisplay'>
            <Image alt='picture' src={image} height='450' width='250' className='cursor-pointer'/>
            </Link>
            <p>{card_Title}</p>
            <h4>{prize}</h4>
          
        </div>

    </div>
  )
}

export default Product