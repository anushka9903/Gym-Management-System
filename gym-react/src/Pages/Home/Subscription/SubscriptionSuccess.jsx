import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import "./SubscriptionSuccess.css";
import {
  createSubscription,
  getUserSubscription,
  upgradeSubscription,
} from "../../../redux/Subscription/Action";
import { Avatar, Button, Card } from "@mui/material";
import { green } from "@mui/material/colors";

const SubscriptionSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { subscription } = useSelector((store) => store);

  const queryParams = new URLSearchParams(location.search);

  // Access the 'payment_id' and 'planType' parameters
  const paymentId = queryParams.get("payment_id");
  const planType = queryParams.get("planType");

  console.log("Payment ID:", paymentId);
  console.log("Plan Type:", planType);

  useEffect(() => {
    dispatch(createSubscription({ planType }));
    dispatch(getUserSubscription(localStorage.getItem("jwt")));
  }, []);

  return (
    <div className="relative subscriptionSuccess flex h-screen items-center justify-center">
      <div className="z-50 subscriptionSucessCard mt-20 p-10 space-y-5 flex flex-col items-center rounded-md bg-black bg-opacity-40 shadow-2xl shadow-white ">
        <div className="flex items-center gap-4">
          <Avatar sx={{ bgcolor: green[500] }}>
            <i class="fas fa-check text-white"></i>
          </Avatar>

          <p className="text-xl">Plan Subscribed Successfully</p>
        </div>
        <div className="space-y-3">
          <p className="text-green-500">
            start date: {subscription.userSubscription?.subscriptionStartDate}
          </p>
          <p className="text-red-500">
            end date : {subscription.userSubscription?.subscriptionEndDate}
          </p>
          <p>plan type : {subscription.userSubscription?.planType}</p>
        </div>
        <Button onClick={() => navigate("/")}>Go To Home</Button>
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-80"></div>
    </div>
  );
};

export default SubscriptionSuccess;
