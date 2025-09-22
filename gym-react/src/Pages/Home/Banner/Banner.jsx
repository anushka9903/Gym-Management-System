import React, { useEffect, useState } from "react";
import "./Banner.css";
const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://cdn.pixabay.com/photo/2017/04/22/10/15/woman-2250970_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/04/17/21/49/ai-generated-8703035_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/02/19/14/43/fitness-4006937_1280.jpg",
    // Add more image URLs as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="containerss">
      <div
        className="
        animated-banner
        relative
        w-full h-screen bg-cover bg-center transition-all ease-in-out duration-2000 object-cover object-center"
        // style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="overlay w-[50%] h-screen bg-black bg-opacity-60 absolute top-0 left-0 right-0 text-white flex justify-center items-center">
         <div className="space-y-8">
         <span className="font-semibold text-xl tracking-wider">
            Shape your body
          </span>
          <div>
            <h1 className="text-white text-6xl font-bold uppercase">
            Be <strong className="text-orange-500">strong</strong>
          </h1>
          <p className="text-white text-6xl font-bold uppercase">
            {" "}
            traning hard{" "}
          </p>
          </div>
          <div>
            <span className="bg-orange-500 px-5 py-3 font-bold text-white">
              Get Info
            </span>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
