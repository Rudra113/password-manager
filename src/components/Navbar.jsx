import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-950 text-white ">
      <div className="myContainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-2xl">
          <span className="text-green-700">&lt;</span>
          <span>Pass</span>
          <span className="text-green-700">OP/&gt;</span>
        </div>
        {/* <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold" href="/">
              Home
            </a>
            <a className="hover:font-bold" href="#">
              About
            </a>
            <a className="hover:font-bold" href="#">
              Contact
            </a>
          </li>
        </ul> */}
        <a
          href="https://github.com/Rudra113?tab=repositories" // Replace with your actual GitHub repository URL
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <button className="text-white bg-green-700 my-8 rounded-full flex justify-center items-center ring-white ring-1">
            <img
              className="invert w-10 p-1"
              src="github.svg"
              alt="github logo"
            />
            <span className="font-bold px-4">GitHub</span>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
