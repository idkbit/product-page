import React, { useEffect, useState } from 'react';
import thumbnail1 from '../../images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../images/image-product-4-thumbnail.jpg';
import image1 from '../../images/image-product-1.jpg';
import image2 from '../../images/image-product-2.jpg';
import image3 from '../../images/image-product-3.jpg';
import image4 from '../../images/image-product-4.jpg';
import prev from '../../images/icon-previous.svg';
import next from '../../images/icon-next.svg';
import { LightBox } from '../LightBox';

export const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];
export const images = [image1, image2, image3, image4];

export const Gallery = () => {
  const [isLightboxActive, setIsLightBoxActive] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const [selectedImg, setSelectedImg] = useState({
    image: image1,
    thumbnail: thumbnail1,
  });

  const handleResize = () => setInnerWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSelect = (thumbnail: string) => {
    const img = thumbnail.split('-').slice(0, -1).join('-') + '.jpg';
    setSelectedImg({ image: img, thumbnail });
  };

  const handleNextClick = () => {
    if (selectedImg.image === image4) {
      setSelectedImg({ ...selectedImg, image: image1 });
      return;
    }
    setSelectedImg({
      ...selectedImg,
      image: images[images.findIndex((el) => el === selectedImg.image) + 1],
    });
  };

  const handlePrevClick = () => {
    if (selectedImg.image === image1) {
      setSelectedImg({ ...selectedImg, image: image4 });
      return;
    }
    setSelectedImg({
      ...selectedImg,
      image: images[images.findIndex((el) => el === selectedImg.image) - 1],
    });
  };

  return (
    <div className='flex-1'>
      <div className='overflow-hidden md:rounded-lg mb-8 relative'>
        <button
          onClick={handlePrevClick}
          className='absolute bg-white w-10 h-10 rounded-full flex justify-center items-center left-8 top-1/2 md:hidden'
        >
          <img src={prev} alt='' />
        </button>
        <img
          onClick={() => setIsLightBoxActive(true)}
          src={selectedImg.image}
          alt='sneakers.'
          className='max-w-full'
        />
        <button
          onClick={handleNextClick}
          className='absolute bg-white w-10 h-10 rounded-full flex justify-center items-center right-8 top-1/2 md:hidden'
        >
          <img src={next} alt='' />
        </button>
      </div>
      <div className='hidden md:flex md:gap-8'>
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
      {isLightboxActive && innerWidth > 767 && (
        <LightBox
          setIsLightBoxActive={setIsLightBoxActive}
          currentImg={selectedImg.image}
        />
      )}
    </div>
  );
};
