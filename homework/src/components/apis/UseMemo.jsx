import { useState, useMemo } from "react";

export const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(10);

    // Memoizing the expensive computation
    const expensiveValue = useMemo(() => computeExpensiveValue(number), [number]);

    return (
        <div>
            <h2 className="text-xl mb-2">Expensive Computation Result: {expensiveValue}</h2>
            <button className="bg-blue-400 rounded p-2 mr-2" onClick={() => setCount(count + 1)}>Increment Count ({count})</button>
            <button className="bg-blue-400 rounded p-2" onClick={() => setNumber(number + 1)}>Change Number ({number})</button>
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
