import React, { useState } from 'react';
import thumbnail1 from '../../images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../images/image-product-4-thumbnail.jpg';
import image1 from '../../images/image-product-1.jpg';
import image2 from '../../images/image-product-2.jpg';
import image3 from '../../images/image-product-3.jpg';
import image4 from '../../images/image-product-4.jpg';

const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];
const images = [image1, image2, image3, image4];

export const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState({
    image: image1,
    thumbnail: thumbnail1,
  });

  const handleSelect = (thumbnail: string) => {
    const img = thumbnail.split('-').slice(0, -1).join('-') + '.jpg';
    setSelectedImg({ image: img, thumbnail });
  };

  return (
    <div className='flex-1'>
      <div className='overflow-hidden rounded-lg mb-8'>
        <img src={selectedImg.image} alt='sneakers.' className='w-full' />
      </div>
      <div className='flex gap-8'>
        {thumbnails.map((thumbnail) => (
          <div
            key={thumbnail}
            onClick={() => handleSelect(thumbnail)}
            className={`border-[3px] border-transparent hover:cursor-pointer group rounded-lg overflow-hidden flex-1 ${
              thumbnail === selectedImg.thumbnail ? 'border-primaryOrange' : ''
            }`}
          >
            <img
              src={thumbnail}
              alt='sneakers.'
              className={`w-full group-hover:opacity-40 ${
                thumbnail === selectedImg.thumbnail ? 'opacity-40' : ''
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
