import React, { useEffect, useState } from "react";
import WhyChooseUs from "../Home/WhyChooseUs/WhyChooseUs";
import WhatWeOffer from "../Home/WhatWeOffer/WhatWeOffer";
import { IconButton } from "@mui/material";

const AboutUs = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleButtonClick = () => {
      window.scrollTo({
        top: scrollPosition + window.innerHeight,
        behavior: 'smooth'
      });
    };
  return (
    <div>
      <div className="w-full relative">
        <video loop autoPlay controls>
          <source
            src="https://videos.pexels.com/video-files/7674504/7674504-uhd_4096_2160_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute bg-black bg-opacity-40 top-0 bottom-0 right-0 left-0 flex flex-col h-full items-center justify-center">

            <h1 className="font-bold text-6xl text-orange-500">About Us</h1>
            <p className="font-semibold text-xl">FITME</p>
            <div className="mt-10">
                   <IconButton onClick={handleButtonClick} className="">
                <i class="fas fa-chevron-down  text-5xl"></i>
            </IconButton>
            </div>
         
            

        </div>
      </div>
      <div className="p-20 flex justify-center gap-10">
        <div className="">
          <img
            className="w-[25rem]"
            src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="w-[50%] px-5">
          <h1 className="text-5xl text-orange-500 font-bold pb-5">About Us</h1>
          <p className="text-xl tracking-widest">
            At FitMe Gym, we're dedicated to helping you achieve your fitness
            goals and live a healthier lifestyle. With state-of-the-art
            facilities, experienced trainers, and personalized workout programs,
            we provide a supportive environment where you can thrive. Join our
            community and embark on a journey to transform your body and mind.
          </p>
        </div>
      </div>
      <WhatWeOffer />
      <WhyChooseUs />
    </div>
  );
};

export default AboutUs;
