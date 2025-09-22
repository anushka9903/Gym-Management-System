import React from "react";
import "./SubscriptionCard.css";
import { useDispatch, useSelector } from "react-redux";
import { createPayment } from "../../../redux/Payment/Action";
import { Box, Modal } from "@mui/material";
import CurrentSubscription from "./CurrentSubscription";

const fetures = [
  "Free Consultation",
  "Group classes",
  "Personal trainer",
  "Group trainer",
  "Access to all clubs",
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'black',
  border: 'none',
  outline:"none",
  boxShadow: 24,
  p: 4,
};

const SubscriptionCard = ({item}) => {
  const dispatch=useDispatch();
  const { subscription } = useSelector((store) => store);

  const handleSubscribePlan=()=>{
    dispatch()
  }

  const handleMakePayment=()=>{
    dispatch(
      createPayment({
        planType: item.planName,
        jwt: localStorage.getItem("jwt"),
      })
    );
  }

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  return (
    <div className="text-white text-center">
    
      <div class=" ps-item w-[22rem] h-[35rem] flex flex-col justify-center items-center">
        <h3 className="font-bold">{item.planName} PLAN</h3>
        <p>{item.planDuration}</p>
        <div class="pi-price">
          <h2>₹{item.planPrice}</h2>
        </div>
        <ul>
          {fetures.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        {/* subscription.userSubscription? */}
        <button onClick={subscription.userSubscription?handleOpenModal:handleMakePayment} className="mt-10 font-bold text-lg uppercase bg-[#333333] w-full py-3">
          Enroll now
        </button>
      </div>
      
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="currentSubscriptionCard absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-black border-none outline-none shadow-lg p-10 bg-opacity-30" sx={style}>
         <CurrentSubscription/>
        </div>
      </Modal>

    </div>
  );
};

export default SubscriptionCard;
