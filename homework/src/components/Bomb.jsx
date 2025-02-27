import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Bomb = () => {
    const { register, handleSubmit } = useForm();
    const [clickedTiles, setClickedTiles] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [message, setMessage] = useState("Find The Bomb...");
    const [gridSize, setGridSize] = useState(0);
    const [showBoxes, setShowBoxes] = useState(false);
    const [attempt, setAttempt] = useState(0);
    const [score, setScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [round, setRound] = useState(3);
    const [bombPosition, setBombPosition] = useState(null); // Bomb position in state

    const submitHandler = (data) => {
        const size = parseInt(data.gridsize);
        if (!size || size < 2 || size > 10) {
            alert("Please enter a valid grid size between 2 and 10.");
            return;
        }
        setGridSize(size);
        setShowBoxes(true);
        startNewRound(size);
    };

    const startNewRound = (size) => {
        const totalTiles = size * size;
        setBombPosition(Math.floor(Math.random() * totalTiles)); // Update bomb position
        setClickedTiles([]);
        setGameOver(false);
        setMessage("Find The Bomb");
        setAttempt(0);
        setScore(0);
    };

    const totalTiles = gridSize * gridSize;

    const handleClick = (index) => {
        if (gameOver || clickedTiles.includes(index)) return;

        if (index === bombPosition) {
            const roundScore = totalTiles - attempt;
            setMessage("💣 Boom! Bomb Found...");
            setScore(roundScore);
            setTotalScore((prevTotal) => prevTotal + roundScore);
            setGameOver(true);
        } else {
            setMessage("Keep Searching...");
            setClickedTiles([...clickedTiles, index]);
            setAttempt(attempt + 1);
        }
    };

    const nextRound = () => {
        if (round > 1) {
            setRound((prevRound) => prevRound - 1);
            startNewRound(gridSize); // Start a new round with updated bomb position
        } else {
            setMessage(`Game Over! Your Final Score: ${totalScore}`);
            setGameOver(true);
            setShowBoxes(false);
        }
    };

    return (
        <div className="min-h-fit flex flex-col items-center justify-center p-4">
            <div className="bg-white text-[#6b21a8] p-6 rounded-lg shadow w-full max-w-lg" style={{ fontFamily: "Mystery Quest, serif" }}>
                <div className="flex flex-col justify-center gap-2 mb-4">
                    <h1 className="text-2xl">Total Score: {totalScore}</h1>
                    <h1 className="text-2xl">Round: {round}</h1>
                    <h1 className="text-2xl">{message}</h1>
                </div>

                {!showBoxes && (
                    <form
                        onSubmit={handleSubmit(submitHandler)}
                        className="flex justify-center items-center space-x-2 mt-4 mb-4"
                    >
                        <label className="text-xl">Grid Size:</label>
                        <input
                            type="number"
                            {...register("gridsize")}
                            className="border-2 border-gray-300 p-2 rounded w-24 focus:outline-none focus:ring-2 focus:ring-purple-900"
                            min="2"
                            max="10"
                        />
                        <button type="submit" className="bg-purple-800 text-white rounded p-2 hover:bg-purple-700 transition duration-300">
                            Start Game
                        </button>
                    </form>
                )}

                {showBoxes && (
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: `repeat(${gridSize}, 50px)`,
                            gap: "10px",
                            justifyContent: "center",
                            marginTop: '20px',
                        }}
                    >
                        {Array.from({ length: totalTiles }).map((_, index) => (
                            <div
                                key={index}
                                onClick={() => handleClick(index)}
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    border: "1px solid black",
                                    backgroundColor: clickedTiles.includes(index) ? "#ddd" : "#fff",
                                    cursor: gameOver ? "not-allowed" : "pointer",
                                    fontSize: "24px",
                                }}
                            >
                                {gameOver && index === bombPosition ? "💣" : ""}
                            </div>
                        ))}
                    </div>
                )}

                {gameOver && (
                    <button
                        className="bg-purple-800 text-white rounded px-4 py-2 mt-4 hover:bg-purple-700 transition duration-300"
                        onClick={nextRound}
                    >
                        {round > 1 ? "Next Round" : "Finish Game"}
                    </button>
                )}
            </div>
        </div>
    );
};