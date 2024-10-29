import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Adminpage from "./pages/Adminpage";
import Dashboard from "./pages/Dashboard";
import Postpage from "./pages/Postpage";
import Managepage from "./pages/Managepage";
import Logadmin from "./pages/Logadmin";
import Drinks from "./pages/Drinks";
import Parfait from "./pages/Parfait";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import {Provider} from 'react-redux'
import {store} from './Store';
import Itemcart from "./pages/Itemcart";
import Detail from "./pages/Detail";
import Cartcard from "./pages/Cartcard";
import Confirmation from "./pages/Confirmation";
import Payonline from "./pages/Payonline";
import Cardpayment from "./pages/Cardpayment";
import Adminsign from "./pages/Adminsign";
import Notfound from "./pages/Notfound";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<App />} />

        <Route path="/sign-up" element={<Signup />} />
        <Route path="/admin/signup" element={<Adminsign/>} />
        <Route path = "/admin/login" element={<Logadmin/>} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/drinks/details/:id" element={<Detail/>} />
        <Route path="/cartcard" element={<Cartcard/>} />
        <Route path="/itemcart" element={<Itemcart />} />
        <Route path="/itemcart/confirmation" element={<Confirmation/>} />
       <Route path="itemcart/confirmation/payonline" element={<Payonline/>} />
       <Route path="itemcart/confirmation/payonline/cardpayment" element={<Cardpayment/>}/>
        <Route path="/parfait" element={<Parfait />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        
        <Route path="/admin/login" element={<Logadmin />} />
        <Route path="/admin" element={<Adminpage />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/postproduct" element={<Postpage />} />
          <Route path="/admin/manageproduct" element={<Managepage />} />
        </Route>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
