import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [userdata, setuserdata] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setuserdata({
      fullName: { firstname: firstname, lastname: lastname },
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
    setfirstname("");
    setlastname("");
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
          <h3 className="text-lg mb-2 font-semibold">Whats's your name</h3>
          <div className="flex gap-4 mb-5">
            <input
              className="bg-gray-200 border rounded px-4 py-2 w-1/2 text-base"
              type="text"
              required
              placeholder="First Name"
              id="firstname"
              value={firstname}
              onChange={(e) => {
                setfirstname(e.target.value);
              }}
            />
            <input
              className="bg-gray-200 border rounded px-4 py-2 w-1/2 text-base"
              type="text"
              required
              placeholder="Last Name"
              id="lastname"
              value={lastname}
              onChange={(e) => {
                setlastname(e.target.value);
              }}
            />
          </div>
          <h3 className="text-lg mb-2 font-semibold">Email Address</h3>
          <input
            className="bg-gray-200 border rounded px-4 py-2 w-full text-base mb-5"
            type="email"
            required
            placeholder="user@example.com"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h3 className="text-lg mb-2 font-semibold">Enter Password</h3>
          <input
            className="bg-gray-200 border rounded px-4 py-2 w-full text-base mb-5"
            type="password"
            required
            placeholder="********"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="bg-[#111] text-white rounded-md px-4 py-2 w-full text-base mb-5">
            Sign up
          </button>
        </form>
        <p className="text-center font-medium">
          Already a user?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-sm leading-tight">
          By creating an account, you agree to our{" "}
          <span className="underline">Terms of Service</span> and{" "}
          <span className="underline">Privacy Policy</span>. We are committed to
          protecting your data and ensuring a smooth experience.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
