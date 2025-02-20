import { useState } from "react";

export const Navbar = () => {
    const [active, setActive] = useState("Pricing");

    return (
        <nav className="bg-[#0e0f10] rounded-2xl shadow-lg text-navText p-4"
            style={{
                fontFamily: "Hubot Sans",
            }}>
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-2xl font-semibold tracking-wide">
                    <span className="text-gray-300">ad</span>Task.ai
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-8 text-sm font-medium">
                    {["Resources", "Pricing", "Contact Us"].map((item) => (
                        <li
                            key={item}
                            className={`relative cursor-pointer transition duration-300 text-white`}
                            onClick={() => setActive(item)}
                        >
                            {item}
                            {active === item && (
                                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-[2px] bg-white bottom-[-25px]"></div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Call-to-Action Button */}
                <button className="px-5 py-2 text-sm rounded-full border border-buttonBorder bg-[#2b313f] text-white hover:bg-[#3e4451] transition">
                    Try Now for Free
                </button>
            </div>
        </nav >
    );
}
