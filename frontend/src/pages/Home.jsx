import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RiArrowDownWideLine } from "react-icons/ri";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          opacity: 1,
          padding: 24,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0",
          opacity: 0,
          padding: 0,
        });
      }
    },
    [panelOpen]
  );

  return (
    <div className="h-screen relative">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />

      <div className="h-screen w-screen">
        {/* image for temporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="h-screen flex flex-col justify-end  absolute top-0 w-full">
        <div className="h-[30%] bg-white p-6 relative">
          {panelOpen && (
            <h5
              onClick={() => {
                setPanelOpen(false);
              }}
              className="absolute top-7 right-3 text-2xl"
            >
              <RiArrowDownWideLine className="" />
            </h5>
          )}
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-[3px] top-[48%] left-9 bg-gray-700 rounded-full"></div>
            <input
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              onClick={() => setPanelOpen(true)}
              placeholder="Add a pick-up location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
            <input
              className="bg-[#eee] px-8 py-2 text-base rounded-lg mt-4 w-full"
              type="text"
              onClick={() => setPanelOpen(true)}
              placeholder="Enter your destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-white ">
          <LocationSearchPanel />
        </div>
      </div>

      {/* this is for when we click on any location  */}
      <div className="fixed z-10">
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
