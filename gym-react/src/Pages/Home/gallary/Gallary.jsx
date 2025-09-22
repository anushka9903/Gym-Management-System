import { Grid } from "@mui/material";
import React from "react";

const Gallary = () => {
  return (
    <div className="bg-[#151515]">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <img
            className="h-96"
            src="https://themewagon.github.io/gymlife/img/gallery/gallery-1.jpg"
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img
            className="h-96"
            src="https://themewagon.github.io/gymlife/img/gallery/gallery-3.jpg"
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img
            className="h-96"
            src="https://themewagon.github.io/gymlife/img/gallery/gallery-2.jpg"
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img
            className="h-96 w-full object-cover"
            src=" https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img
            className="h-96 w-full object-cover"
            src="https://cdn.pixabay.com/photo/2017/11/06/03/38/girl-2922668_1280.jpg"
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <img
            className="h-96 w-full object-cover"
            src="https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </Grid>
        {/* */}
      </Grid>
    </div>
  );
};

export default Gallary;
