import React from "react";

const WhatWeOfferCard = ({item}) => {
  return (
    <div className="w-96 h-[29rem] bg-black">
      <img
        className="w-full h-[65%] object-cover image"
        src={item.image}
        alt=""
      />
      <div className="p-5 h-[35%]  flex flex-col justify-center">
            <p className="font-bold text-orange-500 tracking-widest">{item.name}</p>
      <h1 className="text-sm text-white">{item.description}</h1>
      </div>
  
    </div>
  );
};

export default WhatWeOfferCard;
