import React from "react";

const Hero = () => {
  return (
    <div>
      <div className='w-full h-screen'>
        <div className='lg:w-5/6 w-full grid lg:grid-cols-2 gap-4 mx-auto h-screen'>
          <div className='h-96 my-auto'>
            <h1 className='text-5xl text-black font-semibold lg:text-left text-center pt-8 lg:pt-0'>
              Welcome to Pronera
            </h1>
            <h2 className='text-xl text-black text-center lg:text-left font-medium pt-8 w-5/6 mx-auto lg:mx-0'>
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </h2>
            <div className='lg:block flex items-center justify-center'>
              <button className='rounded-3xl bg-blued h-16 w-48 hover:shadow-xl hover:ring-4 hover:ring-blue-400 shadow-blue-400 text-xl text-white mt-8'>
                Get Started
              </button>
            </div>
          </div>
          <div className='lg:my-auto my-0 w-full mt-8'>
            <img
              src='../images/hero3.jpg'
              alt=' '
              className='lg:h-[500px] h-96 rounded-2xl'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
