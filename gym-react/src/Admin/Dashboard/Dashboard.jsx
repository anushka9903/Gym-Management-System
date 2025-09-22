import { Grid } from "@mui/material";
import React from "react";
import TrainerTable from "../Trainer/TrainerTable";
import SubscriptionTable from "../Subsscription/SubscriptionTable";

const Dashboard = () => {
  return (
    <div className="p-5 lg:p-10">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} lg={6}>
          <TrainerTable />
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <SubscriptionTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
