import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, initTE } from "tw-elements";
import Swal from "sweetalert2";

const Login = () => {
  initTE({ Input })

  // States
  const [user, setUser] = useState({
    username: '',
    password: '',
    isAdmin: false
  });

  const navigate = useNavigate();

  // Event Handlers
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setUser({ ...user, [key]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const url = user.isAdmin ? '/admin_login' : 'http://localhost:5000/users';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        // Unsuccessful Login
        console.log("this is the user",data)
        Swal.fire({
          icon: "error",
          title: "Login Error",
          text: `${data.error}.`,
          confirmButtonText: "Try Again",
          confirmButtonColor: "#05C7F8",
          timer: 2500,
          timerProgressBar: true
        })
        
      } else {
        // Successful Login
        localStorage.setItem('jwt', data.jwt);
        // const userDetails = user.isAdmin ? data.admin : data.users;
        const userDetails =  data.username;


        console.log("this are the user details",data.username)
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        user.isAdmin ? localStorage.setItem("userType", "Administrator") : localStorage.setItem("userType", "Applicant");

        // alert('Success');
        Swal.fire({
          icon: "success",
          title: `Welcome ${userDetails.username}!`,
          confirmButtonText: "Continue",
          confirmButtonColor: "#05C7F8"
        }).then(() => {
          // Navigate to either Landing Page or AdminDashboard
          user.isAdmin ? navigate("/admin") : navigate("/");
          window.location.reload();
        })
      }
    });
  }

  return (
    <section className="login">
      <div className="flex flew-row space-x-8 py-12 px-32">
          <div className="left-side w-1/2">
              <img
                  src="https://plus.unsplash.com/premium_photo-1685214580428-7eae1a78e7bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9naW4lMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Three people sitting outside in a discussion"
                  className="rounded-3xl h-full object-cover"
              />
          </div>

          <div className="right-side space-y-10 w-1/2">
            <div className='bg-blue-dark text-white rounded-3xl p-10'>
              <div className='text-left mb-6 space-y-1.5'>
                <h1 className='font-extrabold text-5xl'>Login</h1>
                <p className='font-medium text-lg'>Welcome back! Log in to your account to continue.</p>
              </div>

              <form onSubmit={handleSubmit} className='text-left'>
                <div className='space-y-1 mb-2.5'>
                  <label className='block'>Username:</label>
                  <input className='block rounded border-0 bg-white px-3 w-full h-10 text-blue-dark' onChange={handleChange} type="text" name="username" placeholder="Username" required/>
                </div>
                  
                <div className='space-y-1'>
                  <label className='block'>Password:</label>
                  <input className='block rounded border-0 bg-white px-3 w-full h-10 text-blue-dark' onChange={handleChange} type="password" name="password" placeholder="Password" required/>
                </div>
                <div className='w-full text-center flex items-center'>
                  <button className='w-full bg-orange-dark rounded p-2 mt-6 text-white lg:text-xl font-bold bottom-0 hover:bg-blue-light' type="submit">Log In</button>
                </div>
                

                <p className='text-center mt-4'>Don't have an account yet? <a className='underline hover:text-orange-dark' href="/register">Sign up</a></p>
              </form>
            </div>
          </div>
      </div>
  </section>
    
  );
};

export default Login;
