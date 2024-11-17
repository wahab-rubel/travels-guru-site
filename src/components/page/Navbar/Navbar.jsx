// src/components/Navbar.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../layouts/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const links = (
    <>
      <Link to="/news" className="hover:underline">
        News
      </Link>
      <Link to="/destination" className="hover:underline">
        Destination
      </Link>
      <Link to="/blog" className="hover:underline">
        Blog
      </Link>
      <Link to="/contact" className="hover:underline">
        Contact
      </Link>
    </>
  );


  return (
    <div
      className="font-montserrat relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/1QXwT41/Rectangle-1.png')", // Replace with your image URL
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Navbar */}
      <nav className="absolute top-0 w-full flex items-center justify-between p-6 text-white z-20">
        {/* Logo */}
        <Link className="text-2xl font-bold">
          <img
            className="w-[156px] h-[56px] bg-white p-2"
            src="/public/logo.png"
            alt=""
          />
        </Link>

        {/* Links and Search */}
        <div className="flex items-center gap-4">
          {/* Search Input */}
          <div>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto bg-white text-black rounded"
            />
          </div>

          {/* Navigation Links */}
          {links}
          <div className="low-600 navbar-end">
            <a className="btn">{user?.email}</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10">
        <h1 className="text-4xl font-bold mb-4">Cox's bazar</h1>
        <p className="text-xl max-w-lg">
          Cox's Bazar is a city, fishing port, tourism centre and district
          headquarters in southeastern Bangladesh. It is famous mostly for its
          long natural sandy beach, and it ...
        </p>
        <button className="bg-[#F9A51A] w-[161px] h-[48px] rounded-lg mt-10">
          Booking
        </button>
      </div>
    </div>
  );
};

export default Navbar;
