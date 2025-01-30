import React from "react";
import { MdLocationOn } from "react-icons/md";

const LocationSearchPanel = () => {
  return (
    <div>
      {/* this is a sample data */}
      <div className="flex items-center gap-3 justify-start">
        <h2 className="bg-[#eee] p-2 rounded-full">
          <MdLocationOn className="text-xl" />
        </h2>
        <h4 className="text-base font-medium">
          24B, Near Kapoor's cafe, coding school, uttar pradesh
        </h4>
      </div>
      <div className="flex items-center gap-3 my-3 justify-start">
        <h2 className="bg-[#eee] p-2 rounded-full">
          <MdLocationOn className="text-xl" />
        </h2>
        <h4 className="text-base font-medium">
          24B, Near Kapoor's cafe, coding school, uttar pradesh
        </h4>
      </div>
      <div className="flex items-center gap-3 my-3 justify-start">
        <h2 className="bg-[#eee] p-2 rounded-full">
          <MdLocationOn className="text-xl" />
        </h2>
        <h4 className="text-base font-medium">
          24B, Near Kapoor's cafe, coding school, uttar pradesh
        </h4>
      </div>
    </div>
  );
};

export default LocationSearchPanel;
