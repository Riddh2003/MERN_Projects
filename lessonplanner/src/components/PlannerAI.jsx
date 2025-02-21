import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button'; // Assuming you have a Button component in the ui folder

export const PlannerAI = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4">
            <div className="bg-white flex rounded-full w-full max-w-lg shadow-lg text-[#6b21a8]">
                <Input
                    type="text"
                    className="text-lg w-full h-full border-none p-4 rounded-l-full focus:outline-none focus:ring-2 focus:ring-purple-900"
                    placeholder="Search"
                />
                <Button type="submit" className="bg-purple-800 text-white px-4 py-4 rounded-r-full hover:bg-purple-700 transition duration-300 flex items-center h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                    </svg>
                </Button>
            </div>
        </div>
    );
};