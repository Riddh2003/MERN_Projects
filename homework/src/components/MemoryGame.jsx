import React from 'react'

export const MemoryGame = () => {
    const fruits = ['🍌', '🍊', '🍍', '🍎', '🍏', '🍉', '🍇']
    const totalboxes = 2 * fruits.length;
    return (
        <div className='w-full min-h-fit flex justify-center p-4' style={{
            fontFamily: "Mystery Quest, serif",
            color: "#6b21a8"
        }}>
            <div className='bg-white shadow w-1/3 rounded-lg text-center p-6'>
                <h1 className='text-3xl font-medium'>Memorize Game</h1>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${fruits.length}, 50px)`,
                        gap: "10px",
                        justifyContent: "center",
                        margin: '20px',
                    }}
                >
                    {
                        Array.from({ length: totalboxes }).map((_, index) => {
                            return (
                                <div
                                    key={index}
                                    className='w-[50px] h-[50px] border-1 cursor-pointer border-purple-300 rounded bg-white'>

                                </div>
                            );
                        })
                    }
                </div>
            </div>

        </div>
    )
}
