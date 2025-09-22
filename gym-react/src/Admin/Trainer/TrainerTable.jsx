import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrainers } from "../../redux/Trainers/Action";
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const TrainerTable = () => {
  const dispatch = useDispatch();
  const { trainer } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getTrainers());
  }, []);

  console.log("trainer", trainer);
  return (
    <>
      <TableContainer className="bg-black rounded-md p-5">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="right">Full Name</TableCell>
              <TableCell align="right">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trainer.trainers.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="item">
                  <Avatar src={item.image} />
                </TableCell>
                <TableCell align="right">{item.fullName}</TableCell>
                <TableCell align="right">{item.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TrainerTable;
