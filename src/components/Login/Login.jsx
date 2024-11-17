import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../layouts/AuthProvider';

function Login() {

  const { signInUser } = useContext(AuthContext)

  const handleLogin = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    signInUser(email, password)
    .then(result =>{
      console.log(result)
    })
    .catch(error => {
      console.log("ERROR", error)
    });
  }
  return (
   <div className="font-montserrat hero bg-base-100 min-h-screen">
   <div className="hero-content flex-col lg:flex-row-reverse">
     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
     <h1 className="text-4xl font-bold text-center">Login Now!</h1>

       <form onSubmit={handleLogin} className="card-body">
         <div className="form-control">
           <label className="label">
             <span className="label-text">Email</span>
           </label>
           <input type="email" name='email' placeholder="email" className="input input-bordered" required />
         </div>
         <div className="form-control">
           <label className="label">
             <span className="label-text">Password</span>
           </label>
           <input type="password" name='password' placeholder="password" className="input input-bordered" required />
           <label className="label">
             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
           </label>
         </div>
         <div className="form-control mt-6">
           <button className="btn btn-primary">Login</button>
         </div>
       </form>

       <div className='flex justify-center items-center p-4'>
        <Link to="/register">Don’t have an account? <span className='text-red-600'>Create an account</span></Link>
       </div>

     </div>
   </div>
 </div>
  )
}

export default Login
