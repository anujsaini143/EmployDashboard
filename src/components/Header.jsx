import React, { useState } from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { LuLayoutGrid } from "react-icons/lu";
import { TbSettingsCog } from "react-icons/tb";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { LuGrid2X2Plus } from "react-icons/lu";
import { AiFillMessage } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { TiThMenuOutline } from "react-icons/ti";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { IoHome } from 'react-icons/io5';
import { Link } from 'react-router';



export default function Header() {
    const [open, setOpen] = useState(false);
    const items = [{ title: "Dashboard", content: "Admin Dashboard", path: "/" }]
    return (
        <>
            {/* {//lg:screen k liya } */}
            <header className='shadow py-2 px-3 hidden lg:flex bg-white justify-between sticky top-0 left-0  z-40'>
                <div className='flex items-center gap-3'>
                    <span><FaLongArrowAltLeft /></span>
                    <span className='shadow flex p-1 items-center justify-center rounded gap-2'>
                        <span><IoMdSearch /></span>
                        <span><input type="text" className='p-1p-2 outline-none bg-transparent' placeholder='Search' /></span>
                        <span className='pe-3 bg-gray-200 p-1 rounded'><button>CTRL + /</button></span>
                    </span>
                    <span className='flex items-center gap-3'>
                        <LuLayoutGrid />
                        <TbSettingsCog />
                    </span>
                </div>
                <div className='flex gap-3 items-center'>
                    <MdCheckBoxOutlineBlank />
                    <LuGrid2X2Plus />
                    <AiFillMessage />
                    <MdOutlineEmail />
                    <IoIosNotifications />
                    <img className='rounded-full' width={30} height={30} src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-12.jpg" alt="" />
                </div>
            </header>
            {/* {//lg: sa nicha} */}
            <header className='lg:hidden  text-[#F5E7C6] bg-[#0a1f44] sticky top-0 left-0  z-50 text-[30px] flex justify-between items-center shadow py-1 px-2'>
                <span className='flex items-center justify-center'>
                    <TiThMenuOutline onClick={() => setOpen(true)} className={`${open == true ? "hidden" : "flex"}`} />
                    <MdDeleteForever onClick={() => setOpen(false)} className={`${open == true ? "flex" : "hidden"}`} />
                </span>
                <span><img width={70} src="https://masu-consultancy.vercel.app/images/payroll-logo.jpeg" alt="" /></span>
                <BsThreeDotsVertical />
            </header>
            <div className="relative z-50">
                <div className={`lg:hidden absolute top-0 left-0 duration-500 flex flex-col gap-4 w-full h-screen text-[#F5E7C6]  bg-[#0a1f44] p-2 ${open == true ? "translate-x-0" : "-translate-x-full"}`}>
                    <Accordion items={items} />
                </div>
            </div>

        </>
    )
}

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className='w-full h-screen flex '>
            <div className='w-full'>
                {
                    items.map((item, index) => (
                        <div key={index} className='w-full'>
                            <button
                                className='rounded-md p-2 text-white w-full text-left'
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <div className='flex items-center gap-3 text-[#F5E7C6]'>
                                    <IoHome /> {item.title}
                                </div>
                            </button>
                            {openIndex === index && (
                                <div className='duration-500 p-2  rounded-md'>
                                    <a href={item.path} className="text-[#F5E7C6]">{item.content}</a>
                                </div>
                            )}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
