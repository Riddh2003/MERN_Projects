import React from "react";

export const Form = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="bg-zinc-400 w-1/3 h-1/2 text-black flex flex-col rounded-xl p-4 space-y-4 shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <p className="text-4xl text-center font-semibold">Form</p>
        <div className="flex flex-col">
          <label className="mb-1">Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="rounded-md p-2 text-black"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Age:</label>
          <input
            type="number"
            placeholder="Enter Age"
            className="rounded-md p-2 text-black"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Gender:</label>
          <div className="flex items-center space-x-4">
            <label>
              <input type="radio" name="gender" value="male" className="mr-1" />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                className="mr-1"
              />
              Female
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
