import React from 'react';

const Card = ({img,data}) => {
  return (
    <div className='h-[30vh] w-[15vw] rounded-[10%] overflow-hidden relative group'>
  
      <div
        className='w-full h-full bg-cover bg-center absolute top-0 left-0 transition-all duration-300 ease-in-out group-hover:blur-sm'
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      {/* Text content */}
      <div className='relative z-10 p-4 text-white'>
        <h1 className='text-xl '>{data}</h1>
        <p className='leading-4 mt-3'>Enabling Seamless Resale Operations Across E-Commerce</p>
      </div>

      <button className=" bottom-2 left-2 text-white font-semibold flex items-center gap-1  group opacity-0 group-hover:opacity-100 transition-opacity duration-300  rounded-md p-4">
        <span className="relative">
          Explore More
          <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
        </span>
        <span className="relative flex items-center justify-center w-5 h-5">
          <span className="absolute inset-0 bg-[#0ebab1] opacity-0 group-hover:opacity-100 group-hover:visible invisible"></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="12"
            height="12"
            fill="white"
            className="relative z-10"
          >
            <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Card;
