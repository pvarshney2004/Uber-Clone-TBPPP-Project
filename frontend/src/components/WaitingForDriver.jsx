import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { RiArrowDownWideLine } from "react-icons/ri";

import { HiCash } from "react-icons/hi";
import { IoLocation } from "react-icons/io5";

const WaitingForDriver = ({waitingForDriver}) => {
  return (
    <div>
      <div className="flex items-center justify-start">
        <h5 onClick={()=>{waitingForDriver(false)}} className="p-3 text-center text-3xl cursor-pointer">
          <RiArrowDownWideLine />
        </h5>
      </div>

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
            <IoLocationOutline className="text-2xl" />
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600">Gla University, Mathura</p>
            </div>
          </div>
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
    </div>
  );
};

export default WaitingForDriver;
