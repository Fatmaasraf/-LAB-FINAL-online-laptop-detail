import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black h-12 w-full border-3 flex justify-end text-right">
      <div>
        {" "}
        <h1 className=" text-3xl font-bold mr-20  text-white text-right">
          Online Laptop Presentor Detail{" "}
        </h1>{" "}
      </div>

      <ul>
        <div className="lg:inline-flex lg:flex-row lg:ml-96">
          <Link href="/">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-100">
              <span>Home</span>
            </a>
          </Link>
          <Link href="/AboutUs">
            <a
              href="#"
              className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-100"
            >
              <span>About us</span>
            </a>
          </Link>

          <Link href="/ContactUs">
            <a
              href="#"
              className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-100"
            >
              <span>Contact us</span>
            </a>
          </Link>
       
         




         
          <Link href="/dashboard">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-100">
              <span>Dashboard</span>
            </a>
          </Link>
         
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
