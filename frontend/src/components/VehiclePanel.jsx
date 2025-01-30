import React from "react";
import { RiArrowDownWideLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

const VehiclePanel = ({ setVehiclePanel, setconfirmRidePanel }) => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <h3 className="text-2xl font-semibold ml-2">Choose a Vehicle</h3>
        <h5
          onClick={() => setVehiclePanel(false)}
          className="p-3 text-center text-3xl cursor-pointer"
        >
          <RiArrowDownWideLine />
        </h5>
      </div>
      <div onClick={()=>{setconfirmRidePanel(true)}} className="flex w-full items-center p-3 mb-2 justify-between border-2 active:border-black rounded-lg shadow-md">
        <img
          className="h-16"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png"
          alt="Uber Ride"
        />
        <div className="flex flex-col gap-1 w-1/2">
          <h4 className="flex items-center gap-2 text-lg font-medium">
            UberGo{" "}
            <span className="flex items-center gap-1">
              <FaUser /> 4
            </span>
          </h4>
          <h5 className="text-gray-600">2 mins away</h5>
          <p className="text-sm text-gray-500">Affordable, compact rides</p>
        </div>
        <h2 className="text-lg font-semibold">$193.20</h2>
      </div>
      <div onClick={()=>{setconfirmRidePanel(true)}} className="flex w-full items-center p-3 mb-2 justify-between border-2 active:border-black rounded-lg shadow-md">
        <img
          className="h-16"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt="Uber Ride"
        />
        <div className="flex flex-col gap-1 w-1/2">
          <h4 className="flex items-center gap-2 text-lg font-medium">
            Moto{" "}
            <span className="flex items-center gap-1">
              <FaUser /> 1
            </span>
          </h4>
          <h5 className="text-gray-600">3 mins away</h5>
          <p className="text-sm text-gray-500">Affordable, motorbike rides</p>
        </div>
        <h2 className="text-lg font-semibold">$65.20</h2>
      </div>
      <div onClick={()=>{setconfirmRidePanel(true)}} className="flex w-full items-center p-3 mb-2 justify-between border-2 active:border-black rounded-lg shadow-md">
        <img
          className="h-16"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYZNGPspo5yDiYR9DP05wsjLh1skE79Jfng&s"
          alt="Uber Ride"
        />
        <div className="flex flex-col gap-1 w-1/2">
          <h4 className="flex items-center gap-2 text-lg font-medium">
            Uber Auto{" "}
            <span className="flex items-center gap-1">
              <FaUser /> 5
            </span>
          </h4>
          <h5 className="text-gray-600">3 mins away</h5>
          <p className="text-sm text-gray-500">Affordable, auto rides</p>
        </div>
        <h2 className="text-lg font-semibold">$116.20</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
