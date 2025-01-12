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
        massage: "Name is required*"
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
      validate: value => value == "royal" || "jagrut" || "Invalid refCode"
    }
  };

  return (
    <div className="max-h-fit flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-blue-100 w-1/3 h-auto text-black flex flex-col rounded-xl m-6 p-6 space-y-4 shadow-xl"
      >
        <p className="text-4xl text-center font-semibold">
          Student Application
        </p>
        <div className="flex flex-col">
          <label className="mb-1">Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="rounded-md p-2 text-black"
            {...register("name", validationSchema.name)}
          />
          <p className="text-red-400">{errors.name?.message}</p>
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Age:</label>
          <input
            type="number"
            placeholder="Enter Age"
            className="rounded-md p-2 text-black"
            {...register("age", validationSchema.age)}
          />
          <p className="text-red-400">{errors.age?.message}</p>
        </div>
        <div className="flex flex-col">
          <label className="mb-1">refCode:</label>
          <input
            type="text"
            placeholder="Enter refCode"
            className="rounded-md p-2 text-black"
            {...register("refCode", validationSchema.refCodde)}
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
            className="rounded-md p-2 text-black"
            {...register("email")}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Phone Number:</label>
          <input
            type="tel"
            placeholder="Enter Phone Number"
            className="rounded-md p-2 text-black"
            {...register("phoneNo")}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Address:</label>
          <textarea
            placeholder="Enter Address"
            className="rounded-md p-2 text-black"
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
          className="bg-blue-500 text-white rounded-md p-2 mt-4 hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      {isSubmited && (
        <div className="mt-6 p-4 bg-white rounded-xl shadow-md w-1/3">
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
