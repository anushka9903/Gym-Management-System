import React from "react";

const TrainerCard = ({item}) => {
  return (
    <div className="w-64 h-[26rem] bg-black text-white">
      <img
        className="w-full h-64 object-cover object-top"
        src={item.image}
        alt=""
      />
      <div className="flex flex-col items-center text-center justify-center p-5 gap-3 h-[10rem]">
        <div className="space-y-1">
          <h1 className="text-xl font-bold">{item.fullName}</h1>
          <h3 className="text-gray-500 font-semibold">GYM TRINER</h3>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-orange-500 h-9 w-9 rounded-md flex justify-center items-center">
            <i className="fab fa-facebook-f"></i>
          </div>
          <div className="bg-orange-500 h-9 w-9 rounded-md flex justify-center items-center">
          <i class="fab fa-twitter"></i>
          </div>
          <div className="bg-orange-500 h-9 w-9 rounded-md flex justify-center items-center">
          <i class="fab fa-instagram"></i>
          </div>
          <div className="bg-orange-500 h-9 w-9 rounded-md flex justify-center items-center">
          <i class="fab fa-youtube"></i>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
