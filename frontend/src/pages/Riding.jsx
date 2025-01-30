import React from "react";
import { IoIosHome } from "react-icons/io";


import { HiCash } from "react-icons/hi";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">

        <Link to='/home' className="fixed h-10 w-10 bg-white flex items-center justify-center rounded-full right-2 top-2">
        <IoIosHome className="text-2xl" />

        </Link>


      <div className="h-1/2">
        {/* image for temporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-20 shadow-lg rounded-lg"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">ABCD</h2>
            <h2 className="text-xl font-semibold">UP86 X9999</h2>
            <p className="text-gray-600 font-medium">Maruti Suzuki</p>
          </div>
        </div>

        <div className="flex justify-between items-center flex-col gap-2">
          <div className="w-full">
            
            <div className="flex items-center gap-3 p-2 border-b-2">
              <IoLocation className="text-2xl" />
              <div>
                <h3 className="text-lg font-medium">563/12-B</h3>
                <p className="text-sm text-gray-600">Gla University, Mathura</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 border-b-2">
              <HiCash className="text-2xl" />
              <div>
                <h3 className="text-lg font-medium">$278</h3>
                <p className="text-sm text-gray-600">Cash-Only</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">Make a Payment</button>
      </div>
    </div>
  );
};

export default Riding;
