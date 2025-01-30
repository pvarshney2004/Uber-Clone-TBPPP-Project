import React from "react";
import { MdLocationOn } from "react-icons/md";

const LocationSearchPanel = ({ setPanelOpen, setVehiclePanel }) => {
  // sample array for locations
  const locations = [
    "24B, Near Kapoor's cafe, coding school, uttar pradesh",
    "23D, Near Mishra's cafe, coding school, madhya pradesh",
    "22A, Near Singh's cafe, coding school, andhra pradesh",
    "21C, Near Gupta's cafe, coding school, uttar pradesh",
  ];

  return (
    <div>
      {/* this is a sample data */}

      {locations.map(function (item, idx) {
        return (
          <div key={idx}
            onClick={() => {
              setVehiclePanel(true);
              setPanelOpen(false);
            }}
            className="flex items-center gap-3 border-2 p-3 border-gray-100 active:border-black rounded-xl justify-start"
          >
            <h2 className="bg-[#eee] p-2 rounded-full">
              <MdLocationOn className="text-xl" />
            </h2>
            <h4 className="text-base font-medium">{item}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
