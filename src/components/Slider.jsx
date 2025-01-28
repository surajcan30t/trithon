import React, { useState, useEffect } from 'react';
import timeline from '../assets/trithontimelinewithlogodesktop.png'
import timelinephone from '../assets/trithontimelinewithlogo.jpg'
import dsc1 from '../assets/DESC1234.jpeg'
import dsc2 from '../assets/DESC1239.jpeg'
import dsc3 from '../assets/DESC1236.jpeg'
import dsc4 from '../assets/DESC1237.jpeg'
import dsc5 from '../assets/DESC1238.jpeg'
import posterPhone from '../assets/TRITHONPOSTER.png'
import poster from '../assets/Picture1.png'

const images = [
    poster,
    timeline,
    dsc1,
    dsc2,
    dsc3,
    dsc4,
    dsc5
];
const imagesPhone = [
    posterPhone,
    timelinephone,
    dsc1,
    dsc2,
    dsc3,
    dsc4,
    dsc5
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Auto slide effect (optional)
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Clean up the interval on unmount
    }, []);

    return (
        <div className="relative top-32 md:top-0 w-[93%] md:w-screen md:max-w-[100vw] h-[38vh] md:h-screen mx-auto">
            <div className="relative overflow-hidden">
                {/*Slider for small devices like phone*/}
                <div className="flex md:hidden transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {imagesPhone.map((image, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-[30vh] md:h-[93vh] object-contain" />
                        </div>
                    ))}
                </div>
                {/* Slider for larger devices */}
                <div className="hidden md:flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <img src={image} alt={`Slide ${index + 1}`} className="w-full h-[30vh] md:h-[calc(100vh-3rem)] object-cover" />
                    </div>
                ))}
            </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-80 py-2 text-center">
                <h4 className="text-lg sm:text-3xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-[#9dffff] via-[#ffff11] to-[#ff8411] animate-txt tracking-mwider">
                    HACKATHON THEME: Technology Intervention for a Sustainable Future
                </h4>
            </div>
    </div>
    );
};

export default Slider;
