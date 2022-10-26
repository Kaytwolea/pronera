import React from "react";

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
                <a href='!#'>Home</a>
              </li>
              <li className='text-black text-base hover:text-blued'>
                <a href='!#'>About Us</a>
              </li>
              <li className='text-black text-base hover:text-blued'>
                <a href='!#'>Services</a>
              </li>
              <li className='text-black text-base hover:text-blued'>
                <a href='!#'>Team</a>
              </li>
              <li className='text-black text-base hover:text-blued'>
                <a href='!#'>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
