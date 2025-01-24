import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [captaindata, setcaptaindata] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setcaptaindata({ email: email, password: password });
    setEmail("");
    setpassword("");
    console.log("data received");
  };
  return (
    <div className="p-5 flex justify-between flex-col h-screen">
      <div>
        <img
          className="w-20 mb-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s"
          alt=""
        />

        <form onSubmit={submitHandler}>
          <h3 className="text-lg mb-2 font-semibold">Email Address</h3>
          <input
            className="bg-gray-200 border rounded px-4 py-2 w-full text-base mb-5"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="captain@example.com"
            id="email"
          />
          <h3 className="text-lg mb-2 font-semibold">Password</h3>
          <input
            className="bg-gray-200 border rounded px-4 py-2 w-full text-base mb-5"
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
            placeholder="********"
            id="password"
          />
          <button className="bg-[#111] text-white rounded-md px-4 py-2 w-full text-base mb-5">
            Login
          </button>
        </form>
        <p className="text-center font-medium">
          New here?{" "}
          <Link to="/captain-signup" className="text-blue-600 hover:underline">
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#f2c063] hover:bg-[orange] text-white flex items-center justify-center font-medium rounded-md px-4 py-2 w-full text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
