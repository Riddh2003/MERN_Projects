import { useState, useMemo } from "react";

export const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(10);

    // Memoizing the expensive computation
    const expensiveValue = useMemo(() => computeExpensiveValue(number), [number]);

    return (
        <div className="min-h-fit flex items-center justify-center p-4">
            <div className="bg-white text-[#6b21a8] p-6 rounded-lg shadow w-full max-w-lg" style={{ fontFamily: "Mystery Quest, serif" }}>
                <h2 className="text-3xl mb-6 text-center">Expensive Computation Result: {expensiveValue}</h2>
                <div className="flex justify-center space-x-4">
                    <button className="bg-purple-800 text-white rounded px-4 py-2 hover:bg-purple-700 transition duration-300" onClick={() => setCount(count + 1)}>
                        Increment Count ({count})
                    </button>
                    <button className="bg-purple-800 text-white rounded px-4 py-2 hover:bg-purple-700 transition duration-300" onClick={() => setNumber(number + 1)}>
                        Change Number ({number})
                    </button>
                </div>
            </div>
        </div>
    );
};

function computeExpensiveValue(num) {
    console.log("Running expensive computation...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
        result += num;
    }
    return result;
}