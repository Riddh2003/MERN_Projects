import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Exam = () => {
  const { register, handleSubmit, reset } = useForm();
  const [questions, setQuestions] = useState([]);
  const [isSubmited, setIsSubmited] = useState(false);

  const submitHandler = data => {
    setQuestions([...questions, data]);
    setIsSubmited(true);
    reset();
  };

  return (
    <div className="min-h-fit flex flex-col items-center justify-center p-4">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-white w-full max-w-lg text-[#6b21a8] flex flex-col rounded-lg p-6 space-y-4 shadow-md"
        style={{ fontFamily: "Mystery Quest, serif" }}
      >
        <p className="text-4xl text-center font-bold mb-4">Exam</p>
        <div className="flex flex-col">
          <label className="mb-1">Question:</label>
          <input
            type="text"
            placeholder="Enter the question"
            className="rounded-md p-2 text-black border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900"
            {...register("question")}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Options:</label>
          <input
            type="text"
            placeholder="Enter option A"
            className="rounded-md p-2 text-black border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900 mb-2"
            {...register("optionA")}
          />
          <input
            type="text"
            placeholder="Enter option B"
            className="rounded-md p-2 text-black border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900 mb-2"
            {...register("optionB")}
          />
          <input
            type="text"
            placeholder="Enter option C"
            className="rounded-md p-2 text-black border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900 mb-2"
            {...register("optionC")}
          />
          <input
            type="text"
            placeholder="Enter option D"
            className="rounded-md p-2 text-black border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-900"
            {...register("optionD")}
          />
        </div>
        <button
          type="submit"
          className="bg-purple-800 text-white rounded-md p-2 mt-4 hover:bg-purple-700 transition duration-300"
        >
          ADD
        </button>
      </form>
      {isSubmited &&
        questions.map((question, index) => (
          <div key={index} className="bg-white text-[#6b21a8] p-6 rounded-lg shadow-md w-full max-w-lg mt-6">
            <p className="text-2xl font-bold mb-4">Question {index + 1}</p>
            <p className="text-lg font-semibold mb-4">Q: {question.question}</p>
            <p className="text-lg font-semibold mb-4">A: {question.optionA}</p>
            <p className="text-lg font-semibold mb-4">B: {question.optionB}</p>
            <p className="text-lg font-semibold mb-4">C: {question.optionC}</p>
            <p className="text-lg font-semibold mb-4">D: {question.optionD}</p>
          </div>
        ))}
    </div>
  );
};