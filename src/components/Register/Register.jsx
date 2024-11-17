import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../layouts/AuthProvider';

function Register() {
  
  const { createUser } = useContext(AuthContext)


  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email  = e.target.email.value;
    const password = e.target.password.value;
    

    // Log the form data (or send it to your backend API)
    console.log(
      name,
      email,
      password,
    );

    createUser(email, password)
    .then(result =>{
      console.log(result)
    })
    .catch(error =>{
      console.log("ERROR", error)
    })
  };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center">Register Now!</h1>
          <form onSubmit={handleRegister} className="card-body border m-10 rounded-lg">
            {/* First Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="Name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>

            {/* Email or Username */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="btn bg-[#F9A51A] text-white">
                Create an account
              </button>
            </div>
          </form>

          {/* Redirect to Login */}
          <div className="text-center p-3 border m-6 mb-4">
            <Link to="/login">
              Already have an account? <span className="text-red-600">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
