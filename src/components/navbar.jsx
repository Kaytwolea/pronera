import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className='h-20 w-full border-b-2 border-blued'>
        <div className='w-5/6 mx-auto items-center bg-transparent h-full flex justify-between'>
          <div className="mx-auto lg:mx-0">
            <img
              src='../images/logo.png'
              alt=' '
              className='h-20 w-60'
            />
          </div>
          <div className='hidden lg:block '>
            <ul className='flex gap-16 font-semibold'>
              <li className='text-black text-base hover:text-blued'>
              <Link to= '/'> <a href=''>Home</a></Link>
              </li>
              <li className='text-black text-base hover:text-blued'>
               <Link to= '/about'> <a href=''>About Us</a></Link>
              </li>
              <li className='text-black text-base hover:text-blued'>
              <Link to= '/contact'> <a href=''>Services</a></Link>
              </li>
              <li className='text-black text-base hover:text-blued'>
              <Link to= '/contact'> <a href=''>Team</a></Link>
              </li>
              <li className='text-black text-base hover:text-blued'>
              <Link to= '/contact'> <a href=''>Contact Us</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
