import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [userdata, setuserdata] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setuserdata({ email: email, password: password });
    setEmail("");
    setpassword("");
    console.log("data received");
  };

  return (
    <div className="p-7 flex justify-between flex-col h-screen">
      <div>
        <img
          className="w-16 mb-7"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
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
            placeholder="user@example.com"
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
          <Link to="/signup" className="text-blue-600 hover:underline">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] hover:bg-green-700 text-white flex items-center justify-center font-medium rounded-md px-4 py-2 w-full text-base"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
