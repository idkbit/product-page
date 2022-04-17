import React, { useState, MouseEvent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { thumbnails, images } from '../Gallery';
import prev from '/images/icon-previous.svg';
import next from '/images/icon-next.svg';

interface Props {
  setIsLightBoxActive: (value: boolean) => void;
  currentImg: string;
}

export const LightBox = ({ setIsLightBoxActive, currentImg }: Props) => {
  const [img, setImg] = useState(currentImg);
  const [image1, , , image4] = images;

  useEffect(() => {
    return () => setIsLightBoxActive(false);
  }, []);

  const handleSelect = (thumbnail: string) => {
    const img = thumbnail.split('-').slice(0, -1).join('-') + '.jpg';
    setImg(img);
  };

  const activeThumbnail = (thumbnail: string) =>
    thumbnail.slice(0, thumbnail.lastIndexOf('-')) + '.jpg' === img
      ? true
      : false;

  const handleNextClick = () => {
    if (img === image4) {
      setImg(image1);
      return;
    }
    setImg(images[images.findIndex((el) => el === img) + 1]);
  };

  const handlePrevClick = () => {
    if (img) {
      setImg(image4);
      return;
    }
    setImg(images[images.findIndex((el) => el === img) - 1]);
  };

  return ReactDOM.createPortal(
    <div
      className='bg-black bg-opacity-75 fixed w-full top-0 left-0 h-screen flex flex-col justify-center items-center'
      onClick={() => setIsLightBoxActive(false)}
    >
      <div className='w-1/2 flex flex-col gap-8 items-center'>
        <button className='ml-auto'>
          <svg width='14' height='15' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
              fill='#fff'
              fillRule='evenodd'
            />
          </svg>
        </button>
        <div
          className='max-w-xl lg:max-w-2xl relative'
          onClick={(e: MouseEvent) => e.stopPropagation()}
        >
          <button
            onClick={handlePrevClick}
            className='absolute top-1/2 -left-6 bg-white w-12 h-12 rounded-full flex justify-center items-center'
          >
            <img src={prev} alt='previous.' />
          </button>
          <img className='object-cover rounded-lg' src={img} alt='' />
          <button
            onClick={handleNextClick}
            className='absolute top-1/2 -right-6 bg-white w-12 h-12 rounded-full flex justify-center items-center'
          >
            <img src={next} alt='next.' />
          </button>
        </div>
        <div className='flex gap-4 px-8 2xl:px-40'>
          {thumbnails.map((thumbnail) => (
            <div
              key={thumbnail}
              onClick={(e: MouseEvent) => e.stopPropagation()}
              className={`${
                activeThumbnail(thumbnail)
                  ? 'border-primaryOrange'
                  : 'border-lightboxBG'
              } border-[3px] hover:cursor-pointer rounded-lg overflow-hidden group bg-white group`}
            >
              <img
                onClick={() => handleSelect(thumbnail)}
                src={thumbnail}
                className={`${
                  activeThumbnail(thumbnail)
                    ? 'opacity-40'
                    : 'group-hover:opacity-40'
                }`}
                alt=''
              />
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
};
