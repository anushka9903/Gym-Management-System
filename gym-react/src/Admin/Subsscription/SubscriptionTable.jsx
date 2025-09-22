import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrainers } from "../../redux/Trainers/Action";
import { getAllSubscription } from "../../redux/Subscription/Action";
import { Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const SubscriptionTable = () => {
  const dispatch = useDispatch();
  const { trainer,subscription } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getAllSubscription(localStorage.getItem("jwt")));
  }, []);

  console.log("all",subscription)
  return (
    <div>
      <TableContainer className="bg-black rounded-md p-5">
        <Table sx={{minWidth:"600px"}} aria-label="simple table">
          <TableHead>
            <TableRow>
              
              <TableCell >Full Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Plan Type</TableCell>
              <TableCell align="right">Start Date</TableCell>
              <TableCell align="right">End Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subscription.subscriptions.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="item">
                {item.user.fullName}
                </TableCell>
                <TableCell align="right">{item.user.email}</TableCell>
                <TableCell align="right">{item.planType}</TableCell>
                <TableCell align="right">{item.subscriptionStartDate}</TableCell>
                <TableCell align="right">{item.subscriptionEndDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SubscriptionTable;
