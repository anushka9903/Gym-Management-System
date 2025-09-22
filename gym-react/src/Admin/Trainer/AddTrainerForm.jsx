import React, { useState } from "react";
import { TextField, Button, IconButton, CircularProgress } from "@mui/material";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";

import { uploadToCloudinary } from "../../Utils/uploadToCloudinary";
import { useDispatch } from "react-redux";
import { addTrainer } from "../../redux/Trainers/Action";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  image: Yup.string().required("image is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const AddTrainerForm = ({handleClose}) => {
    const dispatch=useDispatch();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      image: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      dispatch(addTrainer({userData:values}))
      console.log(values);
      handleClose()
    },
  });

  const [uploadingImage, setUploadingImage] = useState(false);
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    setUploadingImage(true);
    // const image = URL.createObjectURL(file);
    const image = await uploadToCloudinary(file);
    formik.setFieldValue("image", image);
    setUploadingImage(false);
  };

  const handleRemoveImage = (index) => {
    formik.setFieldValue("image", null);
  };

  return (
    <div>
      {/*  */}
      <form className="space-y-5" onSubmit={formik.handleSubmit}>
        <div className="flex items-center gap-5">
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />

          <label className="relative" htmlFor="fileInput">
            <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600">
              <i class="fas fa-image"></i>
            </span>
            {uploadingImage && (
              <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                <CircularProgress />
              </div>
            )}
          </label>

          {formik.values.image && (
            <div className="relative">
              <img
                className="w-24 h-24 object-cover"
                src={formik.values.image}
                alt={`Trainer Images`}
              />
              <IconButton
                onClick={() => handleRemoveImage()}
                size="small"
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  // outline: "none",
                }}
              >
                <i class="fas fa-times text-orange-500"></i>
              </IconButton>
            </div>
          )}
        </div>
        <div>
          <TextField
            id="fullName"
            name="fullName"
            label="Full Name"
            variant="outlined"
            fullWidth
            {...formik.getFieldProps("fullName")}
            error={formik.touched.fullName && formik.errors.fullName}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
        </div>
        <div>
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            {...formik.getFieldProps("email")}
            error={formik.touched.email && formik.errors.email}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>
        <div>
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            {...formik.getFieldProps("password")}
            error={formik.touched.password && formik.errors.password}
            helperText={formik.touched.password && formik.errors.password}
          />
        </div>
        <Button
          sx={{ paddingY: ".7rem" }}
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
        >
          Add Trainer
        </Button>
      </form>
    </div>
  );
};

export default AddTrainerForm;
