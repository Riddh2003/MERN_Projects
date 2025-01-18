import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Exam = () => {
    const { register, handleSubmit } = useForm();
    const [questions, setQuestions] = useState([]);
    const [isSubmited, setIsSubmited] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState({});

    const submitHandler = (data) => {
        const options = [data.optionA, data.optionB, data.optionC, data.optionD];
        const questionObj = {
            question: data.question,
            options: options,
            correctOption: data.correctOption,
        };
        setQuestions([...questions, questionObj]);
        setIsSubmited(true);
    };

    const handleOptionChange = (questionIndex, option) => {
        setSelectedOptions({
            ...selectedOptions,
            [questionIndex]: option,
        });
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
                        className="btn mt-4 p-2 rounded bg-blue-500 text-white w-full hover:bg-blue-600"
                    >
                        ADD
                    </button>
                </div>
            </form>
            {isSubmited && (
                <div className="mt-8">
                    <h1 className="text-2xl font-bold mb-4">Questions</h1>
                    {questions.map((question, index) => (
                        <div key={index} className="mb-6 p-4 bg-white rounded-xl shadow-md">
                            <h2 className="text-xl font-semibold mb-2">Question: {question.question}</h2>
                            <div className="flex flex-col space-y-2">
                                {question.options.map((op, idx) => (
                                    <label key={idx} className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name={`question-${index}`}
                                            className="form-radio h-4 w-4 text-blue-600"
                                            onChange={() => handleOptionChange(index, op)}
                                        />
                                        <span>{op}</span>
                                    </label>
                                ))}
                            </div>
                            {selectedOptions[index] && (
                                <p className={`mt-2 ${selectedOptions[index].toLowerCase() === question.correctOption.toLowerCase() ? 'text-green-600' : 'text-red-600'}`}>
                                    {selectedOptions[index].toLowerCase() === question.correctOption.toLowerCase() ? 'Correct!' : `Correct Option: ${question.correctOption}`}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
