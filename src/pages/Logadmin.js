import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styling.css';
import Navbar from '../components/Navbar';

const Logadmin = () => {
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(ev) {
    ev.preventDefault(); 
    setLoading(true);

    try {
      const res = await axios.post("https://dvashdrinks-back.onrender.com/admin/login", {
        username,
        email,
        password,
      });
      console.log(res.data);
      toast.success("Login successful");
      
      setTimeout(() => {
        navigate('admin/dashboard');
      }, 1000); 
    } catch (err) {
      const errorMessage = err?.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
      console.log(errorMessage);
    } finally {
      setLoading(false); 
    }
  }

  return (
    <div className="background">
      <Navbar />
      <div className="container">
        <div className="theform">
          <form onSubmit={submit}> 
            <h1 className="fs-3 text-white">Welcome back!</h1>
            <input
              required
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="mail"
              id="mail"
              placeholder="Email"
            />
            <input
              required
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button type="submit">
              {loading ? (
                <div className="spinner-border text-light" role="status">
                  <span className="sr-only"></span>
                </div>
              ) : (
                'Submit'
              )}
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Logadmin;
