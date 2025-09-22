import React from "react";

const image="https://cdn.pixabay.com/photo/2017/04/27/08/29/man-2264825_1280.jpg"
const image2="https://cdn.pixabay.com/photo/2021/01/04/06/20/man-5886570_1280.jpg"
const RegisterNow = () => {
  return (
    <div>
      <div className="relative h-[80vh]">
        <img
          className="w-full h-full  object-cover object-center"
          src={image}
          alt=""
        />
        <div className="w-full h-full absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white gap-10">
          <h1 className="text-6xl font-bold">
            {" "}
            REGISTRATION NOW TO GET MORE DEALS
          </h1>
          <p className="text-2xl font-semibold tracking-widest">
            {" "}
            WHERE HEALTH, BEAUTY AND FITNESS MEET.
          </p>

          <button className="border-2 border-orange-500 px-10 py-3 hover:bg-orange-500 text-white font-bold">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterNow;
