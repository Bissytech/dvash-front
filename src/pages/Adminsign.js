import React from "react";
// import Navbar from "../components/Navbar";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styling.css";
import Navbar from "../components/Navbar";



const Adminsign = () => {
  const navigate = useNavigate();
  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     username: "",
  //     password: "",
  //   },
  //   validationSchema: yup.object({
  //     userName: yup
  //       .string()
  //       .min(2, "Too Short!")
  //       .max(50, "Too Long!")
  //       .required("Full name cannot be empty"),


  //     email: yup
  //       .string()
  //       .email("Email must be valid")
  //       .required("Email cannot be empty"),
  //     password: yup
  //       .string()
  //       .matches(
  //         /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
  //         "one letter, one number and between 8 to 16 characters"
  //       )
  //       .required("Password is required"),
  //   }),
  //   onSubmit: (value) => {
  //       alert("working")
  //     console.log(value);
  //   //  axios.post("http://localhost:5005/admin/signup", value)
  //   //     .then((res) => {
  //   //       console.log(res.data);
  //   //       toast.success("Signup successful");
  //   //       setTimeout(() => {
  //   //         navigate("/admin/login");
  //   //       }, 3000);
  //   //     })
  //   //     .catch((err) => {
  //   //       console.log(err);
  //   //       toast.error(err.message);
  //   //     });
  //   }
  // });
  const formik = useFormik({
    initialValues:{
      email:"",
      password:"",
      username: ''
    },
    validationSchema: yup.object({
          username: yup
            .string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Full name cannot be empty"),
    
    
          email: yup
            .string()
            .email("Email must be valid")
            .required("Email cannot be empty"),
          password: yup
            .string()
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
              "one letter, one number and between 8 to 16 characters"
            )
            .required("Password is required"),
        }),
    onSubmit:(value)=>{
       console.log(value);
       axios
       .post("https://dvashdrinks-back.onrender.com/admin/signup", value)
       .then((res) => {
         console.log(res.data);
         toast.success("Signup successful");
         setTimeout(() => {  
           navigate("/admin/login");
         }, 3000);
       })
       .catch((err) => {
         console.log(err);
         toast.error(err.response.data.message);
       });
       
    }
  })
  return (
    <div className="background">
      <Navbar />

      <div className="container">
        <div className="theform">
          {/* <form onSubmit={formik.handleSubmit}>
              <input onChange={formik.handleChange} name="email" type="text" />
              <input onChange={formik.handleChange} name="password" type="text" />
              <button type="submit">submit</button>
          </form> */}
          <form onSubmit={formik.handleSubmit}>
            <h1 className="fs-3 text-white">Hello Admin!!!</h1>

            <input
              required
              type="text"
              name="username"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Username"
            />
            {formik.touched.firstName ? (
              <p className="p-0 m-0 ">{formik.errors.firstName}</p>
            ) : (
              ""
            )}

            

         

            <input
              required
              type="email"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Email"
            />
            {formik.touched.email ? (
              <p className="p-0 m-0 ">{formik.errors.email}</p>
            ) : (
              ""
            )}
            <input
              required
              type="text"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Password"
            />

            {formik.touched.password ? (
              <p className="p-0 m-0 ">{formik.errors.password}</p>
            ) : (
              ""
            )}

            <button type="submit"> Submit  </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Adminsign;
