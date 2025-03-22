import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router";

export default function Sidebar() {
    const items = [{ title: "Dashboard", content: "Employee Dashboard", path: "/" }];

    return (
        <div className="w-64 h-screen fixed p-4 flex flex-col text-[#F5E7C6] bg-[#0a1f44]">
            <div className="mb-6 flex justify-center items-center">
                <img width={100}
                    src="https://masu-consultancy.vercel.app/images/payroll-logo.jpeg"
                    alt="Logo"
                    className=""
                />
            </div>

            <Accordion items={items} />
        </div>
    );
}

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="w-full">
            {items.map((item, index) => (
                <div key={index} className="mb-2">
                    {/* accordion button */}
                    <button
                        className="w-full flex justify-between p-3 rounded-md text-left transition-all"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                        <div className="flex items-center gap-3 cursor-pointer">
                            <IoHome className="text-xl" />
                            <span className="flex items-center gap-2">
                                {item.title}
                                <span className="bg-orange-600 px-2 py-1 text-[10px] font-bold text-white rounded">
                                    Hot
                                </span>
                            </span>
                        </div>
                    </button>

                    {/* accordion content */}
                    <div
                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 p-3" : "max-h-0"
                            }  rounded-md`}
                    >
                        {openIndex === index && (
                            <a href={item.path}>
                                {item.content}
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};
