import React from 'react'
import dsc1 from '../assets/DSC_1748.jpg';
import dsc2 from '../assets/DSC_1751.jpg';
import dsc3 from '../assets/DSC_1803.jpg';
import dsc4 from '../assets/DSC_1878.jpg';
import dsc5 from '../assets/DSC_1951.jpg';
import dsc6 from '../assets/DESC1234.jpeg'
import dsc7 from '../assets/DESC1235.jpeg'
import dsc8 from '../assets/DESC1236.jpeg'
import dsc9 from '../assets/DESC1237.jpeg'
import dsc10 from '../assets/DESC1238.jpeg'

const images = [
  dsc5,
  dsc3,
  dsc1,
  dsc7,
  dsc8,
  dsc6,
  dsc9,
  dsc10
];

const videos = [
  "https://www.youtube.com/embed/YN1sdb4Np3w?si=J8zJ-9XikAPZKWEz",
  "https://www.youtube.com/embed/BSTlshu6hTY?si=A7e0Zrq6IRnVwuo9",
  "https://www.youtube.com/embed/tMeurUCFlZg?si=NDW-_aNTsXuo9XUt",
  "https://www.youtube.com/embed/mLbfZd6-ybo?si=oliiSc_eBtCqmpfS"
]

const Gallery = () => {
  return (
    <>
      <div className='flex flex-col items-start'>
        <h1 className='text-2xl text-white font-bold'>Videos: </h1>
        <div className='w-full min:h-[90vh] rounded-lg mb-5 grid grid-cols-1 md:grid-cols-4 gap-4 p-2'>
          {
            videos.map((src, index) => (
              <div key={index} className='w-full h-full flex justify-center rounded-lg overflow-hidden'>
                <iframe className='w-screen h-[15rem]' src={src} frameborder="0" allowFullScreen width="100%" ></iframe>
              </div>
            ))
          }
          
        </div>
      </div>
      <div className='flex flex-col items-start'>
        <h1 className='text-2xl text-white font-bold'>Pictures: </h1>
        <div className='w-full min:h-[90vh] rounded-lg mb-5 grid grid-cols-1 md:grid-cols-4 gap-4 p-2'>
          {
            images.map((image, index) => (
              <div key={index} className='w-full'>
                <img src={image} alt={`Slide ${index + 1}`} className="w-full h-[30vh] md:h-[40vh] object-cover rounded-lg" />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Gallery