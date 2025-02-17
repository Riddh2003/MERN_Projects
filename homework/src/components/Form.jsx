import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: "all" });
  const [userData, setUserData] = useState();
  const [isSubmited, setIsSubmited] = useState(false);

  const submitHandler = data => {
    console.log(data);
    setUserData(data);
    setIsSubmited(true);
  };

  const validationSchema = {
    name: {
      required: {
        value: true,
        message: "Name is required*"
      }
    },
    age: {
      required: {
        value: true,
        message: "Age is required"
      }
    },
    phoneNo: {
      required: {
        value: true,
        message: "Phone Number is required*"
      },
      pattern: {
        value: /[6-9]{1}[0-9]{9}/,
        message: "Invalid Phone Number"
      }
    },
    refCode: {
      required: {
        value: true,
        message: "RefCode is required*"
      },
      validate: value => value === "royal" || value === "jagrut" || "Invalid refCode"
    }
  };

  return (
    <div className="min-h-fit flex flex-col items-center justify-center p-4">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-white w-full max-w-lg text-[#6b21a8] flex flex-col rounded-lg p-6 space-y-4 shadow-md"
        style={{ fontFamily: "Mystery Quest, serif" }}
      >
        <p className="text-4xl text-center font-bold mb-4">Student Application</p>
        <div className="flex flex-col">
          <label className="mb-1">Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="rounded-md p-2 text-black border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900"
            {...register("name", validationSchema.name)}
          />
          <p className="text-red-400">{errors.name?.message}</p>
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Age:</label>
          <input
            type="number"
            placeholder="Enter Age"
            className="rounded-md p-2 text-black border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900"
            {...register("age", validationSchema.age)}
          />
          <p className="text-red-400">{errors.age?.message}</p>
        </div>
        <div className="flex flex-col">
          <label className="mb-1">RefCode:</label>
          <input
            type="text"
            placeholder="Enter RefCode"
            className="rounded-md p-2 text-black border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900"
            {...register("refCode", validationSchema.refCode)}
          />
          <p className="text-red-400">{errors.refCode?.message}</p>
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Gender:</label>
          <div className="flex items-center space-x-4">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                className="mr-1"
                {...register("gender")}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                className="mr-1"
                {...register("gender")}
              />
              Female
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="rounded-md p-2 text-black border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900"
            {...register("email")}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Phone Number:</label>
          <input
            type="tel"
            placeholder="Enter Phone Number"
            className="rounded-md p-2 text-black border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900"
            {...register("phoneNo")}
          />
          <p className="text-red-400">{errors.phoneNo?.message}</p>
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Address:</label>
          <textarea
            placeholder="Enter Address"
            className="rounded-md p-2 text-black border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900"
            {...register("address")}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Courses Interested:</label>
          <div className="flex items-center space-x-4">
            <label>
              <input
                type="checkbox"
                name="courses"
                value="math"
                className="mr-1"
                {...register("courses")}
              />
              Math
            </label>
            <label>
              <input
                type="checkbox"
                name="courses"
                value="science"
                className="mr-1"
                {...register("courses")}
              />
              Science
            </label>
            <label>
              <input
                type="checkbox"
                name="courses"
                value="history"
                className="mr-1"
                {...register("courses")}
              />
              History
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-purple-800 text-white rounded-md p-2 mt-4 hover:bg-purple-700 transition duration-300"
        >
          Submit
        </button>
      </form>
      {isSubmited && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md w-full max-w-lg text-[#6b21a8]" style={{ fontFamily: "Mystery Quest, serif" }}>
          <h1 className="text-2xl font-bold mb-4">Result</h1>
          <h2>Name: {userData.name}</h2>
          <h2>Age: {userData.age}</h2>
          <h2>Gender: {userData.gender}</h2>
          <h2>Email: {userData.email}</h2>
          <h2>Phone No: {userData.phoneNo}</h2>
          <h2>Address: {userData.address}</h2>
          <h2>Courses: {userData.courses.join(", ")}</h2>
        </div>
      )}
    </div>
  );
};