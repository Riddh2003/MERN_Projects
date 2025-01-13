import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Exam = () => {
  const { register, handleSubmit, reset } = useForm();
  const [questions, setQuestions] = useState([]);
  const [isSubmited, setIsSubmited] = useState(false);

  const submitHandler = data => {
    setQuestions(prevQuestions => [...prevQuestions, data]);
    setIsSubmited(true);
    reset();
  };

  return (
    <div className="flex flex-col items-center mt-6 justify-center max-h-fit">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-6"
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
        </div>
        <div>
          <label>Correct Option: </label>
          <input
            type="text"
            placeholder="Enter the correct option: "
            className="w-full p-2 border border-gray-300 rounded mt-1"
            {...register("correctOption")}
          />
          <button
            type="submit"
            className="btn mt-4 p-2 rounded bg-gray-400 w-full hover:bg-gray-500"
          >
            ADD
          </button>
        </div>
      </form>
      {isSubmited &&
        questions.map((question, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-6"
          >
            <p className="text-2xl font-bold mb-4">Question {index + 1}</p>
            <p className="text-lg font-semibold mb-4">Q: {question.question}</p>
            <p className="text-lg font-semibold mb-4" type="checkbox">
              A: {question.optionA}
            </p>
            <p className="text-lg font-semibold mb-4">B: {question.optionB}</p>
            <p className="text-lg font-semibold mb-4">C: {question.optionC}</p>
            <p className="text-lg font-semibold mb-4">D: {question.optionD}</p>
          </div>
        ))}
    </div>
  );
};
