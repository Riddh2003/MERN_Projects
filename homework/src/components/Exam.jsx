import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Exam = () => {
  const { register, handleSubmit } = useForm();
  const [questions, setQuestions] = useState();
  const [isSubmited, setIsSubmited] = useState(false);
  const submitHandler = data => {
    setQuestions(data);
    setIsSubmited(true);
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <p className="text-2xl font-bold mb-4">Exam</p>
        <div className="mb-4">
          <label className="block text-gray-700">Question :</label>
          <input
            type="text"
            placeholder="Enter the questions: "
            className="w-full p-2 border border-gray-300 rounded mt-1"
            {...register("question")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Options :</label>
          <input
            type="text"
            placeholder="Enter the option A: "
            className="w-full p-2 border border-gray-300 rounded mt-1 mb-2"
            {...register("option A")}
          />
          <input
            type="text"
            placeholder="Enter the option B: "
            className="w-full p-2 border border-gray-300 rounded mt-1 mb-2"
            {...register("option B")}
          />
          <input
            type="text"
            placeholder="Enter the option C: "
            className="w-full p-2 border border-gray-300 rounded mt-1 mb-2"
            {...register("option C")}
          />
          <input
            type="text"
            placeholder="Enter the option D: "
            className="w-full p-2 border border-gray-300 rounded mt-1"
            {...register("option D")}
          />
        </div>
      </form>
    </div>
  );
};
