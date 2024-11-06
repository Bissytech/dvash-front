import React, { useState } from "react";
// import Navbar from "../components/Navbar";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "./styling.css";
import Navbar from "../components/Navbar";



const Signup = () => {
 const [Loading, setLoading] = useState(false)
 const [showPassword,setShowPassword] = useState(false)
  const navigate = useNavigate();
  const handleShowPassword=()=>{
setShowPassword(!showPassword)
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    },
    validationSchema: yup.object({
      firstName: yup
        .string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Full name cannot be empty"),

      lastName: yup
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
    onSubmit: (value) => {
      setLoading(true)
      console.log(value);
      setTimeout(() => {
        setLoading(false)
      }, 3000);
      axios
        .post("https://dvashdrinks-back.onrender.com/sign-up", value)
        .then((res) => {
          console.log(res.data);
          toast.success("Signup successful");
          setTimeout(() => {  
            navigate("/log-in");
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message);
        });
    },
  });
  return (
    <div className="background">
      <Navbar />

      <div className="container">
        <div className="theform">
          <form onSubmit={formik.handleSubmit}>
            <h1 className="fs-3 text-white">Create your Dvash account</h1>

            <input
              required
              type="text"
              name="firstName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="First name"
            />
            {formik.touched.firstName ? (
              <p className="p-0 m-0 ">{formik.errors.firstName}</p>
            ) : (
              ""
            )}

            <input
              required
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="lastName"
              placeholder="Last name"
            />

            {formik.touched.lastName ? (
              <p className="p-0 m-0  ">{formik.errors.lastName}</p>
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
      <div className="hideButton">
      <input
              required
              type={showPassword?'text':'password'}
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Password"

            /> 
             <span onClick={handleShowPassword}>{showPassword? 'Hide' : 'Show'}</span>

        </div>     
        {formik.touched.password ? (
              <p className="p-0 m-0 ">{formik.errors.password}</p>
            ) : (
              ""
            )} 

            <button type="submit">{Loading === true ? 
            <div class="spinner-border text-light" role="status">
            <span class="sr-only"></span>
          </div>: 'Submit'}</button>
            <ToastContainer />
            <div className="goSignUp">
                <span>Have an account?</span>
                <span>
                  {" "}
                  <Link to={"/log-in/"}>Log in</Link>
                </span>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
