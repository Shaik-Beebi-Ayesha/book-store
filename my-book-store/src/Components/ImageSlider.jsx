
import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import {Slide} from 'react-slideshow-image'
import { IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';



const ImageSlider = () => {
  
  const slideImages = [
    {
      url: 'https://miro.medium.com/v2/resize:fit:2400/format:webp/1*01j2_gNyM8tF5LaKtjJh5w.jpeg',
      caption: 'Think before you speak. Read before you think.',
    },
    {
      url: 'https://www.newcastleherald.com.au/images/transform/v1/crop/frm/UWYHFAEKnbyAmcM9MqQVJE/16e709f1-3e2b-4868-93e5-f6818af7021b.jpg/r3184_2473_6149_4564_w1200_h678_fmax.jpg',
      caption: 'Books are mirrors: You only see in them what you already have inside you.',
    },
    {
      url: 'https://s.marketwatch.com/public/resources/images/MW-IF107_pandem_ZG_20200423162303.jpg',
      caption: 'Reading is an active, imaginative act; it takes work.',
    },
    {
      url: 'https://news4masses.com/wp-content/uploads/2016/08/Smile-Woman-Book-Reading.jpg',
      caption: 'A book is a dream that you hold in your hand.',
    },
  ];

  const properties = {
    prevArrow: (
      <IconButton>
        <ArrowBack style={{color:'white'}}/>
      </IconButton>
    ),
    nextArrow: (
      <IconButton>
        <ArrowForward style={{color:'white'}}/>
      </IconButton>
    ),
  };

  return (
    <>
     <div className='slide-container mt-14'>
      <Slide {...properties} autoplay={true} duration={1000}>
        {slideImages.map((image, index) => (
          <div
            key={index}
            className='lg:h-[90vh] h-[30vh] sm:h-[50vh] md:h-[70vh]'
            style={{
              position: 'relative',
              backgroundImage: `url(${image.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <div className='flex justify-center w-[50%]'>
              <h2 className=' text-xl sm:text-2xl md:text-4xl font-bold text-white opacity-40'>{image.caption}</h2>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
    </>
  )
}

export default ImageSlider

