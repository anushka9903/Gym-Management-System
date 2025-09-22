import { Avatar } from "@mui/material";
import { orange } from "@mui/material/colors";
import React from "react";

const ContactCard = ({item}) => {
  return (
    <div className="group w-96 bg-black rounded-md py-3 px-5 flex gap-5 items-center">
      <>
         <Avatar sx={{height:"5rem",width:"5rem",bgcolor:orange[700]}} className="bg-orange-500">
        <i class={`${item.icon} text-4xl text-white`}></i>
      </Avatar>
      </>
     

      <p className="w-[]">{item.description}</p>
    </div>
  );
};

export default ContactCard;
