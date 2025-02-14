import React from "react";
import { IoTimerOutline } from "react-icons/io5";
import { MdOutlineSpeed } from "react-icons/md";
import { LiaStickyNoteSolid } from "react-icons/lia";

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 justify-start">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://tse4.mm.bing.net/th?id=OIP.hzuak7Fjr-w-arzEYhXNgAHaJ4&pid=Api&P=0&h=220"
            alt=""
          />
          <h4 className="text-lg font-medium">Driver Name</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">$200.20</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>

      <div className="flex justify-center gap-4 items-start bg-gray-200 rounded-xl p-4 mt-6">
        <div className="text-center">
          <IoTimerOutline className="text-3xl mb-2 font-thin mx-auto" />
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <MdOutlineSpeed className="text-3xl mb-2 font-thin mx-auto" />
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <LiaStickyNoteSolid className="text-3xl mb-2 font-thin mx-auto" />
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
