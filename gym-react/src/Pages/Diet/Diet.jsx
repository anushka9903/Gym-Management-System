import React from "react";
import { dietData } from "./dientData";
import DietCard from "./DietCard";
import { Divider } from "@mui/material";
import "./Diet.css";

const Diet = () => {
  return (
    <div>
      <div className="dietContainer flex items-center w-full h-[80vh]">
        <div className="px-20 space-y-2">
          <p className="text-6xl font-bold"> <strong className="text-orange-500">Healthy eats </strong> , happy hearts.</p>
          <p className="text-xl">Nourish your body, nourish your life.</p>
        </div>
     
      </div>

      <div className="space-y-5 p-5 lg:p-20">
        {dietData.map((item, index) => (
          <>
            <DietCard item={item} />
            {index !== dietData.length - 1 && <Divider />}
          </>
        ))}
      </div>
    </div>
  );
};

export default Diet;
