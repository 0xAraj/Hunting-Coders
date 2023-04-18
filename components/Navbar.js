import React from "react";

const Navbar = () => {
  return (
    <nav className="py-2">
      <ul className="flex space-x-20 justify-center">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Blogs</li>
        <li className="cursor-pointer">Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
