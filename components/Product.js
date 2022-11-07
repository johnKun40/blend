import React from 'react';
import Image from 'next/image';

function Product({card_Title, image, prize}) {
  return (
    <div>
        <div className='h-12'>
            <h3>{card_Title}</h3>
            <Image alt='picture' src={image} />
            <h4>{prize}</h4>
        </div>

    </div>
  )
}

export default Product