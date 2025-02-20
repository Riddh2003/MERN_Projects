import { motion } from "framer-motion";

export const Pricing = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center text-center mt-32"
            style={{
                fontFamily: 'Hubot Sans',
            }}>
            <button className="bg-[#303341] text-sm px-4 py-2 rounded-2xl text-[#9a9da4]">
                AI DEVELOPMENT PARTNER
            </button>
            <h1 className="text-8xl bg-gradient-to-t from-[#9ca1ac] to-[#303341] bg-clip-text text-transparent hover:shadow-2xl shadow-white mt-14">
                adTask<span className="rounded-full">.</span>ai
            </h1>
            <p className="text-[#dfe1e4] mt-14">AdTask AI is your intelligent companion that transforms how developers code, test, and display.</p>
            <p className="text-[#dfe1e4]">Say goodbye to repetitive tasks and hello to accelerated productivity.</p>
            <button className="bg-[#444f6b] text-sm px-4 py-2 rounded-2xl text-[#9a9da4] mt-8 relative overflow-hidden group">
                Try Now for Free
                <div className="absolute inset-0 bg-cover bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%222%22 fill=%22%23fff%22/%3E%3C/svg%3E')] animate-stars opacity-20 group-hover:opacity-40"></div>
            </button>
            <div className="flex items-center justify-center w-[55vw] h-[65vh] border-2 border-[#424f6f] rounded-3xl overflow-hidden mt-12">
                <div className="flex flex-col items-center justify-center w-full h-[60vh]">
                    <button
                        className="w-24 h-16 bg-red-600 rounded-xl flex items-center justify-center hover:bg-red-700 transform transition-all duration-200"
                        aria-label="Play video"
                    >
                        <h1 className="bg-gradient-to-t from-[#303341] to-[#9ca1ac] bg-clip-text text-transparent text-8xl">Ad<span className="font-bold">Talk.ai</span></h1>
                        <svg
                            className="w-12 h-12 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
