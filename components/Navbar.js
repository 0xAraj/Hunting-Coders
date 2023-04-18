import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-2">
      <ul className="flex space-x-20 justify-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blogs</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
