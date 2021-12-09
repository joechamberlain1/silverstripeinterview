import React, { useState } from "react";
import Axios from "axios";

const Submit = () => {
  const [name, setName] = useState("");
  const [cv, setCv] = useState(false);
  const [coverletter, setCoverletter] = useState("");

  // const displayInfo = () => {
  //   console.log(name + cv + cover);
  // };

  const addApplication = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      cv: cv,
      coverletter: coverletter,
    }).then(() => {
      console.log("Success");
    });
  };

  return (
    <div className="text-center bg-gray-500 h-screen flex flex-col justify-around items-center">
      <div className="flex flex-col justify-center items-center w-full pt-10 text-black">
        <input
          placeholder="Name"
          type="text"
          className="mb-10 p-2 rounded-lg w-3/4"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="file"
          className="mb-10 p-2 rounded-lg cursor-pointer"
          onChange={(e) => {
            setCv(e.target.value);
          }}
        />
        <textarea
          placeholder="Please write your cover le tter here"
          className="mb-10 p-2 rounded-lg md:h-80 h-60 w-3/4"
          name="message"
          onChange={(e) => {
            setCoverletter(e.target.value);
          }}
        />
        <button
          type="submit"
          className="bg-gray-900 w-3/4 rounded-lg p-2 mb-10 text-white cursor-pointer hover:text-black hover:bg-green-500"
          // onClick={displayInfo}
          onClick={addApplication}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Submit;
