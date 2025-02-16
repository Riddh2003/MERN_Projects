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
    <div className="flex flex-col items-center text-white justify-center min-h-fit">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-zinc-900 p-6 rounded-lg shadow-md w-full max-w-md mb-6"
      >
        <p className="text-2xl font-bold mb-4">Exam</p>
        <div className="mb-4">
          <label className="block">Question :</label>
          <input
            type="text"
            placeholder="Enter the questions: "
            className="w-full p-2 border border-gray-300 rounded mt-1"
            {...register("question")}
          />
        </div>
        <div className="mb-4">
          <label className="block">Options :</label>
          <input
            type="text"
            placeholder="Enter the option A: "
            className="w-full p-2 border border-gray-300 rounded mt-1 mb-2"
            {...register("optionA")}
          />
          <input
            type="text"
            placeholder="Enter the option B: "
            className="w-full p-2 border border-gray-300 rounded mt-1 mb-2"
            {...register("optionB")}
          />
          <input
            type="text"
            placeholder="Enter the option C: "
            className="w-full p-2 border border-gray-300 rounded mt-1 mb-2"
            {...register("optionC")}
          />
          <input
            type="text"
            placeholder="Enter the option D: "
            className="w-full p-2 border border-gray-300 rounded mt-1"
            {...register("optionD")}
          />
          <button
            type="submit"
            className="btn mt-4 p-2 rounded text-white bg-blue-500 hover:bg-blue-600 w-full"
          >
            ADD
          </button>
        </div>
      </form>
      {isSubmited &&
        questions.map((question, index) => (
          <div key={index} className="bg-white text-[#6b21a8] p-6 rounded-lg shadow-md w-full max-w-md mb-6">
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
