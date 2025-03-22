import React, { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CiCalendarDate, CiHome } from 'react-icons/ci';
import { FaArrowCircleUp, FaCalendarAlt, FaChevronDown, FaChevronUp, FaEdit, FaRegClock } from 'react-icons/fa';
import { FaAnglesUp } from "react-icons/fa6";
import { FiPhone } from 'react-icons/fi';
import { GoDotFill } from 'react-icons/go';
import { IoStar } from 'react-icons/io5';
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCollectionsBookmark, MdOutlineStarBorder } from 'react-icons/md';
import { PiDotsNineBold } from 'react-icons/pi';
import { TbBrandHipchat, TbMailBolt } from 'react-icons/tb';

const names = ["2025", "2024", "2023"];
const names1 = ["2025", "2024", "2023"];
const names2 = ["All Projects", "Ongoing Projects"];
const names3 = ["Delete", "Edit"];
const names5 = ["All Projects", "Ongoing Projects"];
export default function Home() {
    const [active, setActive] = useState(true);
    const [open, setOpen] = useState(false);
    const [select, setSelect] = useState("2025")
    const [open1, setOpen1] = useState(false);
    const [select1, setSelect1] = useState("2025")
    const [open2, setOpen2] = useState(false);
    const [select2, setSelect2] = useState("Ongoing Projects")
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [select5, setSelect5] = useState("All Projects");
    const [line, setLine] = useState(false);
    const [line1, setLine1] = useState(false);
    const [line2, setLine2] = useState(false);
    const [line3, setLine3] = useState(false);
    const [line4, setLine4] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [shoDropdown, setShoDropdown] = useState(false);
    const [showDropdown1, setShowDropdown1] = useState(false);


    return (
        <>
            <div className='bg-gray-100 p-2 lg:p-4 w-full'>
                <div className='md:flex items-center md:justify-between'>
                    <div><h1 className="font-bold text-[20px] lg:text-[24px]">Employee Dashboard</h1><div className="flex items-center gap-2"><CiHome /><span>Dashboard / Employee Dashboard</span></div></div>
                    <div className='flex gap-3'>
                        <div className='bg-white'>
                            <select className="outline-none border border-gray-300 p-2 rounded">
                                <option>Export</option>
                                <option>Export as PDF</option>
                                <option>Export as Excel</option>
                            </select>
                        </div>
                        <div className='bg-white flex items-center gap-1 p-1 rounded border border-gray-200'>
                            <span><input className='outline-none' type="date" /></span>
                        </div>
                        <div className='hidden md:flex p-2 bg-white rounded justify-center items-center'><FaAnglesUp /></div>
                    </div>
                </div>
                <div className={`p-2 my-10  justify-between items-center bg-gray-300 rounded ${active == true ? "flex" : "hidden"}`}>
                    <div className='text-blue-950 text-[12px] md:text-[16px]'>Your Leave Request on“24th April 2024”has been Approved!!!</div>
                    <div className='font-bold cursor-pointer' onClick={() => setActive(false)}>X</div>
                </div>
                <div className='p-2 grid lg:grid-cols-9 md:grid-cols-3 grid-cols-1 gap-2'>
                    <div className='md:col-span-3 border bg-white rounded border-gray-200 shadow'>
                        <div className='w-full py-4 px-4 bg-black rounded-t  flex justify-between text-white'>
                            <div className='flex gap-2 items-center text-white'>
                                <span className='bg-white p-1 rounded-full'> <img width={50} className='rounded-full' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-01.jpg" alt="" /></span>
                                <span>
                                    <strong>Stephan Peralt</strong><br />
                                    <span className='text-[12px]'>Senior Product <br /> Designer</span>
                                </span>
                            </div>
                            <div className='flex gap-2'>
                                <div className='flex items-end'>UI/UX <br /> Design</div>
                                <div><FaEdit /></div>
                            </div>
                        </div>
                        <div className='bg-white rounded-b flex flex-col gap-5 py-4 px-4'>
                            <div className='flex flex-col'>
                                <span className='text-gray-500'>Phone Number</span>
                                <span>+1 324 3453 545</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-gray-500'>Email Address</span>
                                <span>Steperde124@example.com</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-gray-500'>Report Offic </span>
                                <span>Doglas Martini</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-gray-500'>Joined on</span>
                                <span>15 Jan 2024</span>
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-6 lg:col-span-4 border bg-white rounded border-gray-200 shadow'>
                        <div className='py-4 px-4'>
                            <div className='flex border-b border-gray-200 pb-5 mb-5  justify-between'><h1 className='font-semibold'>Leave Details</h1>
                                <div className="relative">
                                    <button onClick={() => setOpen(!open)} className='p-1 border border-gray-200 rounded flex items-center gap-1 hover:text-orange-500 duration-300 cursor-pointer'>
                                        <span><FaCalendarAlt /></span> <span>{select}</span></button>
                                    {
                                        open && (
                                            <div className={`absolute  border border-gray-200 shadow p-2 flex flex-col items-center justify-center w-full bg-white`}>
                                                {
                                                    names.map((name, index) => {
                                                        return <div key={index} className='w-full'>
                                                            <span className={`cursor-pointer w-full ${select == name ? "text-orange-500" : ""}`} onClick={() => { setSelect(name), setOpen(false) }}>{name}</span>
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        )
                                    }</div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-5'>
                                    <div>
                                        <span> •</span>
                                        <strong> 1254 </strong>
                                        <span className='text-gray-500'> on time </span>
                                    </div>
                                    <div>
                                        <span className='text-green-500'> •</span>
                                        <strong> 32 </strong>
                                        <span className='text-gray-500'> Late Attendance</span>
                                    </div>
                                    <div>
                                        <span className='text-orange-500'> •</span>
                                        <strong> 658 </strong>
                                        <span className='text-gray-500'> Work From Home </span>
                                    </div>
                                    <div>
                                        <span className='text-red-600'> •</span>
                                        <strong> 14 </strong>
                                        <span className='text-gray-500'> Absent </span>
                                    </div>
                                    <div>
                                        <span className='text-green-600'> •</span>
                                        <strong> 68 </strong>
                                        <span className='text-gray-500'> Sick Leave </span>
                                    </div>
                                </div>
                                <div className='w-full flex flex-col items-end gap-2 justify-between'>
                                    <div className='bg-blue-950 p-2 w-[80%]'></div>
                                    <div className='bg-orange-600 p-2 w-[50%]'></div>
                                    <div className='bg-yellow-600 p-2 w-[40%]'></div>
                                    <div className='bg-red-600 p-2 w-[20%]'></div>
                                    <div className='bg-green-600 p-2 w-[30%]'></div>
                                </div>
                            </div>
                            <div className='my-4 flex gap-2'>
                                <span><input type="checkbox" /></span>
                                <span className='text-gray-500'>Better than 85% of Employees</span>
                            </div>
                        </div>
                    </div>
                    <div className='border md:col-span-3 lg:col-span-2 bg-white rounded border-gray-200 shadow'>
                        <div className="px-4 py-4">
                            <div className='flex border-b border-gray-200 pb-5 mb-5  justify-between'><h1 className='font-semibold'>Leave Details</h1>
                                <div className="relative">
                                    <button onClick={() => setOpen1(!open1)} className='p-1 border border-gray-200 rounded flex items-center gap-1 hover:text-orange-500 duration-300 cursor-pointer'>
                                        <span><FaCalendarAlt /></span> <span>{select1}</span></button>
                                    {
                                        open1 && (
                                            <div className={`absolute  border border-gray-200 shadow p-2 flex flex-col items-center justify-center w-full bg-white`}>
                                                {
                                                    names1.map((name, index) => {
                                                        return <div key={index} className='w-full'>
                                                            <span className={`cursor-pointer w-full ${select1 == name ? "text-orange-500" : ""}`} onClick={() => { setSelect1(name), setOpen1(false) }}>{name}</span>
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        )
                                    }</div>
                            </div>
                            <div className=' flex flex-col gap-4'>
                                <div className='grid grid-cols-2 justify-start items-center'>
                                    <div className='flex flex-col'>
                                        <span className='text-gray-500'>Total Leaves</span>
                                        <strong>16</strong>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-gray-500'>Taken</span>
                                        <strong>10</strong>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 justify-start items-center'>
                                    <div className='flex flex-col'>
                                        <span className='text-gray-500'>Absent </span>
                                        <strong>2</strong>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-gray-500'>Request</span>
                                        <strong>0</strong>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 justify-start items-center'>
                                    <div className='flex flex-col'>
                                        <span className='text-gray-500'>Worked Days</span>
                                        <strong>240</strong>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-gray-500'>Loss of Pay</span>
                                        <strong>2</strong>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center my-10'>
                                <button className='px-3 py-1 rounded w-full text-white bg-black'>Apply New Leave</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-2 grid lg:grid-cols-9 grid-cols-1 gap-2'>
                    <div className='border lg:col-span-3 px-3 bg-orange-50 border-orange-500 rounded flex flex-col items-center justify-center py-6 gap-4'>
                        <div className='text-center'><div>Attendance</div><div><strong>08:35 AM, 11 Mar 2025</strong></div></div>

                        <div className='bg-white border-4 border-gray-200 flex flex-col justify-center items-center w-[150px] h-[150px] rounded-full'>
                            <div>Total Hourse</div>
                            <div><strong>05:45:32</strong></div>
                        </div>
                        <div><button className='bg-[#F5E7C6] text-[#0a1f44] hover:text-[#F5E7C6] hover:bg-[#0a1f44] duration-300 font-semibold px-2 py-1 rounded'>Production : 3.45 hrs</button></div>
                        <div className='font-semibold'>Punch In at 10.00 AM</div>
                        <div className='w-full'><button className='text-[#F5E7C6] bg-[#0a1f44] hover:bg-[#F5E7C6] hover:text-[#0a1f44] duration-300 w-full  font-semibold px-8 py-1 rounded'>Punceh Out</button></div>
                    </div>
                    <div className='lg:col-span-6 grid grid-cols-1'>
                        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                            <div className="border bg-white border-gray-200 shadow rounded p-4">
                                <div className="flex"><div className="bg-orange-500 text-white p-1 rounded">  <FaRegClock />   </div> </div>
                                <h2 className="text-2xl font-bold">8.36 / 9</h2>
                                <p className="text-gray-500 border-b pb-3 border-gray-200 font-semibold">Total Hours...</p>
                                <div className=" text-sm font-medium mt-2">  ⬆️ 5% This Week  </div>
                            </div>
                            <div className="border bg-white border-gray-200 shadow rounded p-4">
                                <div className="flex"> <div className="bg-black text-white p-1 rounded">  <FaRegClock />  </div> </div>
                                <h2 className="text-2xl font-bold">10 / 40</h2>
                                <p className="text-gray-500 border-b pb-3 border-gray-200 font-semibold">Total Hours...</p>
                                <div className=" text-sm font-medium mt-2"> ⬆️ 7% Last Week </div>
                            </div>
                            <div className="border bg-white border-gray-200 shadow rounded p-4">
                                <div className="flex"> <div className="bg-blue-500 text-white p-1 rounded">  <FaCalendarAlt />  </div> </div>
                                <h2 className="text-2xl font-bold">75 / 98</h2>
                                <p className="text-gray-500 border-b pb-3 border-gray-200 font-semibold">Total Hours...</p>
                                <div className=" text-sm font-medium mt-2"> ⬆️ 8% Last Month</div>
                            </div>
                            <div className="border bg-white border-gray-200 shadow rounded p-4">
                                <div className="flex"> <div className="bg-blue-500 text-white p-1 rounded">  <FaCalendarAlt />  </div> </div>
                                <h2 className="text-2xl font-bold">16 / 28</h2>
                                <p className="text-gray-500 border-b pb-3 border-gray-200 font-semibold">Overtime this...</p>
                                <div className=" text-sm font-medium mt-2"> ⬆️ 6% Last Month</div>
                            </div>
                        </div>
                        <div className='lg:col-span-6 bg-white p-2 mt-4'>
                            <div>
                                <div className='grid items-center justify-center gap-2 grid-cols-2 my-3 md:grid-cols-4'>
                                    <span className='flex justify-start md:justify-center  items-center gap-2'><FaArrowCircleUp className='bg-gray-300 text-gray-300 rounded-full' /><span>Total Working hours</span></span>
                                    <span className='flex  justify-start md:justify-center items-center gap-2'> <FaArrowCircleUp className='bg-green-500 text-green-500 rounded-full' /><span>Productive Hours</span></span>
                                    <span className='flex justify-start md:justify-center  items-center gap-2'><FaArrowCircleUp className='bg-yellow-500 text-yellow-500 rounded-full' /><span>Break hours</span></span>
                                    <span className='flex justify-start md:justify-center  items-center gap-2'><FaArrowCircleUp className='bg-blue-500 text-blue-500 rounded-full' /><span>Overtime</span></span>
                                </div>
                                <div className='grid items-center justify-center gap-2 grid-cols-2 my-3 md:grid-cols-4 font-bold lg:text-[20px]'>
                                    <h1 className='text-center'>12h 36m</h1>
                                    <h1 className='text-center'>08h 36m</h1>
                                    <h1 className='text-center'>22m 15s</h1>
                                    <h1 className='text-center'>02h 15m</h1>
                                </div>
                                <div className='flex justify-center rounded my-3  w-full'>
                                    <div className='w-[100%]  bg-gray-100 flex justify-center gap-2 overflow-hidden'>
                                        <div className='bg-green-500 p-3 rounded w-[10%]'></div>
                                        <div className='bg-yellow-500 p-3 rounded w-[5%]'></div>
                                        <div className='bg-green-500 p-3 rounded w-[20%]'></div>
                                        <div className='bg-yellow-500 p-3 rounded w-[10%]'></div>
                                        <div className='bg-green-500 p-3 rounded w-[15%]'></div>
                                        <div className='bg-yellow-500 p-3 rounded w-[5%]'></div>
                                        <div className='bg-blue-500 p-3 rounded w-[3%]'></div>
                                        <div className='bg-blue-500 p-3 rounded w-[1%]'></div>
                                    </div>
                                </div>
                                <div className='grid items-center justify-center gap-2 grid-cols-4 md:grid-cols-18 my-3 text-[12px]'>
                                    <span>06:00</span><span>07:00</span><span>08:00</span><span>09:00</span><span>10:00</span>
                                    <span>11:00</span><span>12:00</span><span>01:00</span><span>02:00</span><span>03:00</span>
                                    <span>04:00</span><span>05:00</span><span>06:00</span><span>07:00</span><span>08:00</span>
                                    <span>09:00</span><span>10:00</span><span>11:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-2 grid lg:grid-cols-2 grid-cols-1 gap-4'>
                    <div className="border rounded bg-white border-gray-200 shadow p-2 ">
                        <div className='border-b mb-4 border-gray-200 flex justify-between'>
                            <div className='font-semibold'>Projects</div>
                            <div className='relative'>
                                <button onClick={() => setOpen2(!open2)} className='flex py-2 items-center gap-2 text-[#F5E7C6] p-1 rounded bg-[#0a1f44] hover:text-[#0a1f44] duration-300 hover:bg-[#F5E7C6]'><span>{select2}</span><FaChevronUp className={`${open2 == true ? "hidden" : "flex"}`} /><FaChevronDown className={`${open2 == true ? "flex" : "hidden"}`} /></button>
                                {
                                    open2
                                    &&
                                    <div className='absolute p-2 bg-[#0a1f44] text-white rounded'>
                                        {
                                            names2.map((name, index) => {
                                                return <div key={index} className={`${select2 == name ? "text-[#F5E7C6]" : ""}`}>
                                                    <span onClick={() => { setSelect2(name), setOpen2(false) }}>{name}</span>
                                                </div>
                                            })
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                            <div className='border border-gray-200 rounded p-5 shadow flex w-full items-center justify-between'>
                                <div className='flex flex-col gap-3 items-start w-full'>
                                    <div className='flex justify-between w-full items-center'><span className='font-semibold'>Office Management</span>
                                        <div className="relative">
                                            <span onClick={() => setOpen3(!open3)} className='cursor-pointer'><BsThreeDotsVertical /></span>
                                            {
                                                open3
                                                &&
                                                <div className='absolute bg-white px-4 py-1 rounded border-gray-200 border shadow left-[-50px]'>
                                                    {
                                                        names3.map((name) => {
                                                            return <div>
                                                                <span>{name}</span>
                                                            </div>
                                                        })
                                                    }
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    <div className='flex gap-2 items-center'><span><img width={50} className='rounded-full' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-32.jpg" alt="" /></span><span><span className='font-semibold'>Anthny Lewis</span><br /><span className='text-gray-400'>Projects Leader</span></span></div>
                                    <div className='flex gap-2 items-center'><span className='bg-orange-300 rounded-full p-2 text-[20px]'><FaCalendarAlt /></span><span><span className='font-semibold'>14 Jan 2024</span><br /><span className='text-gray-400'>DeadLine</span></span></div>
                                    <div className='w-full bg-gray-300 p-1 flex justify-between items-center'>
                                        <div className='flex items-center gap-1'>
                                            <span className='bg-green-200 p-2 rounded-full'><MdOutlineCollectionsBookmark /></span>
                                            <span>Tasks : 6 /10</span>
                                        </div>
                                        <div className="flex -space-x-2 items-center">
                                            <img width={20} className="rounded-full border-2 hover:scale-110 duration-500 border-white" src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-06.jpg" alt="Avatar 1" />
                                            <img width={20} className="rounded-full border-2 hover:scale-110 duration-500 border-white" src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-07.jpg" alt="Avatar 2" />
                                            <img width={20} className="rounded-full border-2 hover:scale-110 duration-500 border-white" src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-08.jpg" alt="Avatar 3" />
                                        </div>
                                    </div>
                                    <div className=' rounded bg-gray-600  text-white flex justify-between items-center w-full p-1'><div>Time...</div> <h1 className='font-semibold text-[25px]'>65/120...</h1></div>
                                </div>
                            </div>
                            <div className='border border-gray-200 rounded p-5 shadow flex w-full items-center justify-between'>
                                <div className='flex flex-col gap-3 items-start w-full'>
                                    <div className='flex justify-between w-full items-center'><span className='font-semibold'>Office Management</span>
                                        <div className="relative">
                                            <span onClick={() => setOpen4(!open4)} className='cursor-pointer'><BsThreeDotsVertical /></span>
                                            {
                                                open4
                                                &&
                                                <div className='absolute bg-white px-4 py-1 rounded border-gray-200 border shadow left-[-50px]'>
                                                    {
                                                        names3.map((name) => {
                                                            return <div>
                                                                <span>{name}</span>
                                                            </div>
                                                        })
                                                    }
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    <div className='flex gap-2 items-center'><span><img width={50} className='rounded-full' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-33.jpg" alt="" /></span><span><span className='font-semibold'>Anthony Lewis</span><br /><span className='text-gray-400'>Projects Leader</span></span></div>
                                    <div className='flex gap-2 items-center'><span className='bg-orange-300 rounded-full p-2 text-[20px]'><FaCalendarAlt /></span><span><span className='font-semibold'>14 Jan 2024</span><br /><span className='text-gray-400'>DeadLine</span></span></div>
                                    <div className='w-full bg-gray-300 p-1 flex justify-between items-center'>
                                        <div className='flex items-center gap-1'>
                                            <span className='bg-green-200 p-2 rounded-full'><MdOutlineCollectionsBookmark /></span>
                                            <span>Tasks : 6 /10</span>
                                        </div>
                                        <div className="flex -space-x-2 items-center">
                                            <img width={20} className="rounded-full border-2 hover:scale-110 duration-500 border-white" src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-06.jpg" alt="Avatar 1" />
                                            <img width={20} className="rounded-full border-2 hover:scale-110 duration-500 border-white" src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-07.jpg" alt="Avatar 2" />
                                            <img width={20} className="rounded-full border-2 hover:scale-110 duration-500 border-white" src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-08.jpg" alt="Avatar 3" />
                                        </div>
                                    </div>
                                    <div className=' rounded bg-gray-600  text-white flex justify-between items-center w-full p-1'><div>Time...</div> <h1 className='font-semibold text-[25px]'>65/120...</h1></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded shadow border border-gray-200 p-2'>
                        <div className='flex items-center justify-between border-b border-gray-200 pb-2 mb-5'>
                            <div><strong>Tasks</strong></div>
                            <div className='relative'>
                                <button onClick={() => setOpen5(!open5)} className='p-1 cursor-pointer rounded border border-gray-200 shadow text-[#F5E7C6] bg-[#0a1f44] hover:text-[#0a1f44] duration-300 hover:bg-[#F5E7C6] flex items-center gap-1'>
                                    <span>{select5}</span>
                                    <span className={`${open5 == true ? "hidden" : "flex"}`}><FaChevronUp /></span>
                                    <span className={`${open5 == true ? "flex" : "hidden"}`}><FaChevronDown /></span>
                                </button>
                                {
                                    open5
                                    &&
                                    <div className='absolute bg-white p-2 border border-gray-200 rounded cursor-pointer'>
                                        {
                                            names5.map((name, index) => {
                                                return <div>
                                                    <span className={`${select5 == name ? "text-red-600" : ""}`} onClick={() => { setSelect5(name), setOpen5(false) }}>{name}</span>
                                                </div>
                                            })
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                        <div className={`${line == true ? "bg-pink-300 duration-500" : ""} border my-4 border-gray-200 rounded w-full flex gap-1 justify-between flex-col md:flex-row md:items-center`}>
                            <div className='flex items-center gap-1 p-3'>
                                <PiDotsNineBold />
                                <span><input onClick={() => setLine(!line)} type="checkbox" /></span>
                                <IoStar className='text-yellow-500' />
                                <strong className={`ext-[14px] font-semibold ${line == true ? "line-through text-gray-400" : ""}`}>Patient appointment booking</strong>
                            </div>
                            <div className='flex md:justify-end gap-1 p-1'>
                                <div className='bg-pink-300 text-[12px] text-pink-500 rounded px-1 flex justify-center items-center font-semibold'>● Onhold</div>
                                <div className='flex -space-x-2 items-center'>
                                    <img width={20} className='rounded-full hover:scale-110 hover:z-30 duration-300' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-13.jpg" alt="" />
                                    <img width={20} className='rounded-full hover:scale-110 hover:z-30 duration-300' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-14.jpg" alt="" />
                                    <img width={20} className='rounded-full hover:scale-110 hover:z-30 duration-300' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-15.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={`${line1 == true ? "bg-purple-300 duration-500" : ""} border my-4 border-gray-200 rounded w-full flex gap-1 justify-between flex-col md:flex-row md:items-center`}>
                            <div className='flex items-center gap-1 p-3'>
                                <PiDotsNineBold />
                                <span><input onClick={() => setLine1(!line1)} type="checkbox" /></span>
                                <MdOutlineStarBorder />
                                <strong className={`text-[14px] font-semibold ${line1 == true ? "line-through text-gray-400" : ""}`}>Appointment booking with payment</strong>
                            </div>
                            <div className='p-1 flex flex-col gap-3'>
                                <div className='bg-purple-300 text-purple-500 rounded px-1 flex justify-center text-[12px] items-center font-semibold'>● Inprogress</div>
                                <div className='flex -space-x-2 items-center justify-end'>
                                    <img width={20} className='rounded-full hover:scale-110 hover:z-30 duration-300' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-13.jpg" alt="" />
                                    <img width={20} className='rounded-full hover:scale-110 hover:z-30 duration-300' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-14.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={`${line2 == true ? "bg-green-300 duration-500" : ""} border my-4 border-gray-200 rounded w-full flex gap-1 justify-between flex-col md:flex-row md:items-center`}>
                            <div className='flex items-center gap-1 p-3'>
                                <PiDotsNineBold />
                                <span><input onClick={() => setLine2(!line2)} type="checkbox" /></span>
                                <MdOutlineStarBorder />
                                <strong className={`text-[14px] font-semibold ${line2 == true ? "line-through text-gray-400" : ""}`}>Patient and Doctor video conferencing</strong>
                            </div>
                            <div className='p-1 flex flex-col gap-3'>
                                <div className='bg-green-300 text-green-500 rounded flex justify-center text-[12px] items-center font-semibold'>● Completed</div>
                                <div className='flex -space-x-2 items-center justify-end'>
                                    <img width={20} className='rounded-full hover:scale-110 hover:z-30 duration-300' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-13.jpg" alt="" />
                                    <img width={20} className='rounded-full hover:scale-110 hover:z-30 duration-300' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-14.jpg" alt="" />
                                    <img width={20} className='rounded-full hover:scale-110 hover:z-30 duration-300' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-15.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={`${line3 == true ? "bg-blue-300 duration-500" : ""} border my-4 border-gray-200 rounded w-full flex gap-1 justify-between flex-col md:flex-row md:items-center`}>
                            <div className='flex items-center gap-1 p-3'>
                                <PiDotsNineBold />
                                <span><input onClick={() => setLine3(!line3)} type="checkbox" /></span>
                                <IoStar className='text-yellow-500' />
                                <strong className={`ext-[14px] font-semibold ${line3 == true ? "line-through text-gray-400" : ""}`}>Private chat module</strong>
                            </div>
                            <div className='p-1 flex flex-col gap-3'>
                                <div className='bg-blue-300 text-[12px] text-blue-500 rounded px-1 flex justify-center items-center font-semibold'>● Pending</div>
                                <div className='flex -space-x-2 items-center justify-end'>
                                    <img width={20} className='rounded-full hover:scale-110 hover:z-30 duration-300' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-13.jpg" alt="" />
                                    <img width={20} className='rounded-full hover:scale-110 hover:z-30 duration-300' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-14.jpg" alt="" />
                                    <img width={20} className='rounded-full hover:scale-110 hover:z-30 duration-300' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-15.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={`${line4 == true ? "bg-purple-300 duration-500" : ""} border my-4 border-gray-200 rounded w-full flex gap-1 justify-between flex-col md:flex-row md:items-center`}>
                            <div className='flex items-center gap-1 p-3'>
                                <PiDotsNineBold />
                                <span><input onClick={() => setLine4(!line4)} type="checkbox" /></span>
                                <MdOutlineStarBorder />
                                <strong className={`text-[14px] font-semibold ${line4 == true ? "line-through text-gray-400" : ""}`}>Appointment booking with payment</strong>
                            </div>
                            <div className='p-1 flex flex-col gap-3'>
                                <div className='bg-purple-300 text-purple-500 rounded px-1 flex justify-center text-[12px] items-center font-semibold'>● Inprogress</div>
                                <div className='flex -space-x-2 items-center justify-end'>
                                    <img width={20} className='rounded-full hover:scale-110 hover:z-30 duration-300' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-13.jpg" alt="" />
                                    <img width={20} className='rounded-full hover:scale-110 hover:z-30 duration-300' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-14.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid gap-2 grid-cols-1 lg:grid-cols-9 p-2'>

                    <div className='bg-white p-2 border lg:col-span-4 rounded  border-gray-200 shadow'>
                        <div className='relative'>
                            <div className='flex justify-between border-b border-gray-300 p-3.5'>
                                <span className='text-gray-700 font-bold'>Meetings Schedule</span>
                                <span
                                    className={`flex gap-1 border border-gray-300 p-1  rounded cursor-pointer hover:text-amber-500 duration-500`}
                                    onClick={() => setShoDropdown(!shoDropdown)}
                                >
                                    <span className='pt-0.5'>
                                        <CiCalendarDate />
                                    </span>
                                    <span className='text-sm font-semibold'>2024</span>
                                </span>
                            </div>

                            {shoDropdown && (
                                <div className='absolute right-3 top-16 bg-white shadow-lg border border-gray-300 rounded w-40'>
                                    <ul className='flex flex-col p-2'>
                                        <li className='p-2 hover:bg-amber-500 hover:text-white cursor-pointer'>
                                            2023
                                        </li>
                                        <li className='p-2 hover:bg-amber-500 hover:text-white cursor-pointer'>
                                            2022
                                        </li>
                                        <li className='p-2 hover:bg-amber-500 hover:text-white cursor-pointer'>
                                            2000
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className='flex m-4 mt-5 bg-gray-100 rounded p-2 gap-4 items-center'>
                            <p className='font-bold text-gray-700 text-2xl'>98%</p>
                            <p className='bg-green-100 text-green-500 py-0.5 px-3 rounded-full'>
                                12%
                            </p>
                            <p className='text-gray-600  '>vs last years</p>
                        </div>

                        <div className='flex gap-2 m-3 items-start p-1'>
                            <div className='text-sm text-gray-500   '>
                                <p className='p-3.5 font-semibold'>60K</p>
                                <p className='p-3.5 font-semibold'>50K</p>
                                <p className='p-3.5 font-semibold'>40K</p>
                                <p className='p-3.5 font-semibold'>30K</p>
                                <p className='p-3.5 font-semibold'>20K</p>
                                <p className='p-3.5 font-semibold'>10K</p>
                            </div>

                            <div className='w-full flex flex-col gap-2'>
                                <div className='bg-green-600 text-green-400 w-[90%] p-5 rounded hover:bg-green-300 duration-500'></div>
                                <div className='bg-green-600 text-green-400 w-[70%] p-5 rounded hover:bg-green-300 duration-500'></div>
                                <div className='bg-green-600 text-green-400 w-[50%] p-5 rounded hover:bg-green-300 duration-500'></div>
                                <div className='bg-green-600 text-green-400 w-[30%] p-5 rounded hover:bg-green-300 duration-500'></div>
                                <div className='bg-green-600 text-green-400 w-[20%] p-5 rounded hover:bg-green-300 duration-500'></div>
                                <div className='bg-green-600 text-green-400 w-[10%] p-5 rounded hover:bg-green-300 duration-500'></div>
                            </div>
                        </div>

                        <div className='flex mt-0 m-4 gap-6 text-[12px] text-gray-600 border-t-1 border-gray-300'>
                            <p className='pl-10 '>Jan</p>
                            <p className=''>Feb</p>
                            <p className=''>mar</p>
                            <p className=''>Apr</p>
                            <p className=''>may</p>
                            <p className=''>Jun</p>
                            <p className=''>Jul</p>
                        </div>
                    </div>

                    <div className='bg-white p-2 border lg:col-span-3 rounded  border-gray-200 shadow'>
                        <div className='relative'>
                            <div className='flex justify-between border-b border-gray-300 p-3.5'>
                                <span className='text-gray-700 font-bold'>My Skills</span>
                                <span
                                    className={`flex gap-1 border border-gray-300 p-1  rounded cursor-pointer hover:text-amber-500 duration-500`}
                                    onClick={() => setShowDropdown1(!showDropdown1)}
                                >
                                    <span className='pt-0.5'>
                                        <CiCalendarDate />
                                    </span>
                                    <span className='text-sm font-semibold'>2024</span>
                                </span>
                            </div>

                            {showDropdown1 && (
                                <div className='absolute right-3 top-16 bg-white shadow-lg border border-gray-300 rounded w-40'>
                                    <ul className='flex flex-col p-2'>
                                        <li className='p-2 hover:bg-amber-500 hover:text-white cursor-pointer'>
                                            2023
                                        </li>
                                        <li className='p-2 hover:bg-amber-500 hover:text-white cursor-pointer'>
                                            2022
                                        </li>
                                        <li className='p-2 hover:bg-amber-500 hover:text-white cursor-pointer'>
                                            2000
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className='flex justify-between m-4 mt-5 bg-gray-100 rounded p-2 gap-4 items-center'>
                            <div className='flex gap-3'>
                                <span className='mt-3 rounded-lg h-5 bg-amber-600 w-1'></span>
                                <span>
                                    <p className='font-bold text-[14px] text-gray-600'>Figma</p>
                                    <p className='text-sm text-gray-500'>Updated : 15 May 2025</p>
                                </span>
                            </div>

                            <div className='border-2 rounded-full px-1.5 py-2 border-gray-300 bg-gray-50 text-gray-400'>
                                95%
                            </div>
                        </div>

                        <div className='flex justify-between m-4 mt-5 bg-gray-100 rounded p-2 gap-4 items-center'>
                            <div className='flex gap-3'>
                                <span className='mt-3 rounded-lg h-5 bg-green-600 w-1'></span>
                                <span>
                                    <p className='font-bold text-[14px] text-gray-600'>HTML</p>
                                    <p className='text-sm text-gray-500'>Updated : 12 May 2025</p>
                                </span>
                            </div>

                            <div className='border-2 rounded-full px-1.5 py-2 border-gray-300 bg-gray-50 text-gray-400'>
                                85%
                            </div>
                        </div>

                        <div className='flex justify-between m-4 mt-5 bg-gray-100 rounded p-2 gap-4 items-center'>
                            <div className='flex gap-3'>
                                <span className='mt-3 rounded-lg h-5 bg-red-600 w-1'></span>
                                <span>
                                    <p className='font-bold text-[14px] text-gray-600'>CSS</p>
                                    <p className='text-sm text-gray-500'>Updated : 12 May 2025</p>
                                </span>
                            </div>

                            <div className='border-2 rounded-full px-1.5 py-2 border-gray-300 bg-gray-50 text-gray-400'>
                                70%
                            </div>
                        </div>

                        <div className='flex justify-between m-4 mt-5 bg-gray-100 rounded p-2 gap-4 items-center'>
                            <div className='flex gap-3'>
                                <span className='mt-3 rounded-lg h-5 bg-blue-600 w-1'></span>
                                <span>
                                    <p className='font-bold text-[14px] text-gray-600'>Wordpress</p>
                                    <p className='text-sm text-gray-500'>Updated : 15 May 2025</p>
                                </span>
                            </div>

                            <div className='border-2 rounded-full px-1.5 py-2 border-gray-300 bg-gray-50 text-gray-400'>
                                61%
                            </div>
                        </div>

                        <div className='flex justify-between m-4 mt-5 bg-gray-100 rounded p-2 gap-4 items-center'>
                            <div className='flex gap-3'>
                                <span className='mt-3 rounded-lg h-5 bg-gray-600 w-1'></span>
                                <span>
                                    <p className='font-bold text-[14px] text-gray-600'>Figma</p>
                                    <p className='text-sm text-gray-500'>Updated : 13 May 2025</p>
                                </span>
                            </div>

                            <div className='border-2 rounded-full px-1.5 py-2 border-gray-300 bg-gray-50 text-gray-400'>
                                58%
                            </div>
                        </div>
                    </div>

                    <div className='lg:col-span-2'>
                        <div className='rounded bg-gray-700 mb-3 flex justify-center p-3'>
                            <div className='flex flex-col gap-3'>
                                <h1 className='font-semibold text-white'>Team Birthday</h1>
                                <div className='flex justify-center'><img width={70} className='rounded-full' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-35.jpg" alt="" /></div>
                                <div className='text-white text-center'><div className=' font-semibold'>Andrew Jermia</div><div className='text-gray-400'>IOS Developer</div></div>

                                <div><button className='bg-[#336D82] text-white px-2 py-1 rounded'>Send Wishes</button></div>
                            </div>
                        </div>
                        <div className='rounded bg-[#336D82] my-5 flex justify-between p-3'>
                            <div className='text-white'><h1 className='font-bold text-[18px] text-white'>Leave Policy</h1><p>Last Updated : Today</p></div>
                            <div className='flex justify-center items-center'><button className='bg-gray-300 rounded cursor-pointer px-1'>View All</button></div>
                        </div>
                        <div className='rounded bg-yellow-500 my-5 flex justify-between p-3'>
                            <div className='text-black'><h1 className='font-bold text-[18px] text-black'>Next Holiday</h1><p>Diwali, 15 Sep 2025</p></div>
                            <div className='flex justify-center items-center'><button className='bg-gray-300 rounded cursor-pointe px-1'>View All</button></div>
                        </div>
                    </div>

                </div>

                <div className='p-2'>
                    <div className='grid gap-2 grid-cols-1 lg:grid-cols-3'>
                        {/* 1-left side start */}
                        <div className='border border-gray-300  rounded shadow bg-white'>
                            <div className='flex justify-between border-b border-gray-300 p-3'>
                                <span className='text-gray-700 font-bold'>Team Members</span>
                                <span><button className='border rounded border-gray-300 p-1 text-md cursor-pointer bg-gray-200'><a href="">View All</a></button></span>
                            </div>
                            <div className='p-2 flex justify-between'>
                                <div className='flex gap-1'>
                                    <span className='p-1 bg-gray-100 rounded-full w-12 h-12 '><a href=""><img src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-27.jpg" className=' rounded-full cursor-pointer' /> </a></span>
                                    <span className=''>
                                        <span className=' text-gray-800 hover:text-amber-500 cursor-pointer font-bold text-[12px] duration-500'><a href="">Alexander Jermai</a></span><br />
                                        <span className='text-[12px]'>UI/UX Designer</span>
                                    </span>
                                </div>

                                <div>
                                    <div className='flex gap-1'>
                                        <span className='bg-gray-200 p-2 rounded hover:bg-amber-500 hover:text-white cursor-pointer  duration-500' ><a href=""><FiPhone /> </a> </span>
                                        <span className='bg-gray-200 p-2 rounded hover:bg-amber-500 hover:text-white cursor-pointer  duration-500' ><a href=""><TbMailBolt />  </a></span>
                                        <span className='bg-gray-200 p-2 rounded hover:bg-amber-500 hover:text-white cursor-pointer  duration-500' ><a href=""><TbBrandHipchat /> </a></span>
                                    </div>
                                </div>
                            </div>

                            <div className='p-2 flex justify-between'>
                                <div className='flex gap-1'>
                                    <span className='p-1 bg-gray-100 rounded-full w-12 h-12 '><a href=""><img src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-42.jpg" className=' rounded-full cursor-pointer' /> </a></span>
                                    <span className=''>
                                        <span className='font-bold text-[12px] text-gray-800 hover:text-amber-500 cursor-pointer  duration-500'><a href="">Doglas Martini</a></span><br />
                                        <span className='text-[12px]'>Product Designer</span>
                                    </span>
                                </div>

                                <div>
                                    <div className='flex gap-1'>
                                        <span className='bg-gray-200 p-2 rounded hover:bg-amber-500 hover:text-white cursor-pointer  duration-500' ><a href=""><FiPhone /> </a> </span>
                                        <span className='bg-gray-200 p-2 rounded hover:bg-amber-500 hover:text-white cursor-pointer  duration-500' ><a href=""><TbMailBolt />  </a></span>
                                        <span className='bg-gray-200 p-2 rounded hover:bg-amber-500 hover:text-white cursor-pointer  duration-500' ><a href=""><TbBrandHipchat /> </a></span>
                                    </div>
                                </div>
                            </div>

                            <div className='p-2 flex justify-between'>
                                <div className='flex gap-1'>
                                    <span className='p-1 bg-gray-100 rounded-full w-12 h-12 '><a href=""><img src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-43.jpg" className=' rounded-full cursor-pointer' /> </a></span>
                                    <span className=''>
                                        <span className='font-bold text-[12px] text-gray-800 hover:text-amber-500 cursor-pointer  duration-500'><a href="">Daniel Esbella</a></span><br />
                                        <span className='text-[12px]'>Project Manager</span>
                                    </span>
                                </div>

                                <div>
                                    <div className='flex gap-1'>
                                        <span className='bg-gray-200 p-2 rounded hover:bg-amber-500 hover:text-white cursor-pointer  duration-500' ><a href=""><FiPhone /> </a> </span>
                                        <span className='bg-gray-200 p-2 rounded hover:bg-amber-500 hover:text-white cursor-pointer  duration-500' ><a href=""><TbMailBolt />  </a></span>
                                        <span className='bg-gray-200 p-2 rounded hover:bg-amber-500 hover:text-white cursor-pointer  duration-500' ><a href=""><TbBrandHipchat /> </a></span>
                                    </div>
                                </div>
                            </div>

                            <div className='p-2 flex justify-between'>
                                <div className='flex gap-1'>
                                    <span className='p-1 bg-gray-100 rounded-full w-12 h-12 '><a href=""><img src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-11.jpg" className=' rounded-full cursor-pointer' /> </a></span>
                                    <span className=''>
                                        <span className='font-bold text-[12px] text-gray-800 hover:text-amber-500 cursor-pointer  duration-500'><a href="">Daniel Esbella </a></span><br />
                                        <span className='text-[12px]'>Team Lead</span>
                                    </span>
                                </div>

                                <div>
                                    <div className='flex gap-1'>
                                        <span className='bg-gray-200 p-2 rounded hover:bg-amber-500 hover:text-white cursor-pointer  duration-500' ><a href=""><FiPhone /> </a> </span>
                                        <span className='bg-gray-200 p-2 rounded hover:bg-amber-500 hover:text-white cursor-pointer  duration-500' ><a href=""><TbMailBolt />  </a></span>
                                        <span className='bg-gray-200 p-2 rounded hover:bg-amber-500 hover:text-white cursor-pointer  duration-500' ><a href=""><TbBrandHipchat /> </a></span>
                                    </div>
                                </div>
                            </div>

                            <div className='p-2 flex justify-between'>
                                <div className='flex gap-1'>
                                    <span className='p-1 bg-gray-100 rounded-full w-12 h-12 '><a href=""><img src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-44.jpg" className=' rounded-full cursor-pointer' /> </a></span>
                                    <span className=''>
                                        <span className='font-semibold text-[12px] text-gray-800 hover:text-amber-500 cursor-pointer  duration-500'><a href="">Stephan Peralt</a></span><br />
                                        <span className='text-[12px]'>Team Lead</span>
                                    </span>
                                </div>

                                <div>
                                    <div className='flex gap-1'>
                                        <span className='bg-gray-200 p-2 rounded hover:bg-amber-500 hover:text-white cursor-pointer  duration-500' ><a href=""><FiPhone /> </a> </span>
                                        <span className='bg-gray-200 p-2 rounded hover:bg-amber-500 hover:text-white cursor-pointer  duration-500' ><a href=""><TbMailBolt />  </a></span>
                                        <span className='bg-gray-200 p-2 rounded hover:bg-amber-500 hover:text-white cursor-pointer  duration-500' ><a href=""><TbBrandHipchat /> </a></span>
                                    </div>
                                </div>
                            </div>

                            <div className='p-2 flex justify-between'>
                                <div className='flex gap-1'>
                                    <span className='p-1 bg-gray-100 rounded-full w-12 h-12 '><a href=""><img src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-54.jpg" className=' rounded-full cursor-pointer' /> </a></span>
                                    <span className=''>
                                        <span className='font-semibold text-[12px] text-gray-800 hover:text-amber-500 cursor-pointer  duration-500'><a href="">Andrew Jermia</a></span><br />
                                        <span className='text-[12px]'>Project Lead</span>
                                    </span>
                                </div>

                                <div>
                                    <div className='flex gap-1'>
                                        <span className='bg-gray-200 p-2 rounded hover:bg-amber-500 hover:text-white cursor-pointer  duration-500' ><a href=""><FiPhone /> </a> </span>
                                        <span className='bg-gray-200 p-2 rounded hover:bg-amber-500 hover:text-white cursor-pointer  duration-500' ><a href=""><TbMailBolt />  </a></span>
                                        <span className='bg-gray-200 p-2 rounded hover:bg-amber-500 hover:text-white cursor-pointer  duration-500' ><a href=""><TbBrandHipchat /> </a></span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/*2-center side start */}
                        <div className='border border-gray-300  rounded shadow bg-white'>
                            <div className='flex justify-between border-b border-gray-300 p-3'>
                                <span className='text-gray-700 font-bold'>Notifications</span>
                                <span><button className='border rounded border-gray-300 p-1 text-md cursor-pointer bg-gray-200'><a href="">View All</a></button></span>
                            </div>

                            <div className='flex gap-1 p-2'>
                                <span className='p-1 bg-gray-100 rounded-full w-12 h-12 '><a href=""><img src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-27.jpg" className=' rounded-full cursor-pointer' /> </a></span>
                                <span className=''>
                                    <span className='font-bold text-gray-800 text-[12px]'> Lex Murphy requested access to...</span><br />
                                    <span className='text-sm'>Today at 9:42 AM</span>
                                    <span className='flex gap-2.5'>
                                        <span className='border border-gray-300 w-6 h-6 rounded p-1 mt-0.5 text-center justify-center flex cursor-pointer'><img src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/social/pdf-icon.svg" alt="" className='cursor-pointer' /></span>
                                        <span className='text-md hover:text-amber-500 text-[14px] cursor-pointer'><a href="">EY_review.pdf</a></span>
                                    </span>
                                </span>
                            </div>

                            <div className='flex gap-1 p-2'>
                                <span className='p-1 bg-gray-100 rounded-full w-12 h-12 '><img src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-28.jpg" className=' rounded-full cursor-pointer' /></span>
                                <span className=''>
                                    <span className='font-bold text-gray-800 text-[12px]'> Lex Murphy requested access to...</span><br />
                                    <span className='text-sm'>Today at 10:00 AM</span>
                                </span>
                            </div>

                            <div className='flex gap-1 p-2'>
                                <span className='p-1 bg-gray-100 rounded-full w-12 h-12 '><img src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-29.jpg" className=' rounded-full cursor-pointer' /> </span>
                                <span className=''>
                                    <span className='font-bold text-gray-800 text-[12px]'> Lex Murphy requested access to...</span><br />
                                    <span className='text-sm'>Today at 10:50 AM</span>
                                    <span className='flex gap-2 mt-2'>
                                        <span className='border border-gray-200 rounded bg-amber-600 text-white p-1 items-center  font-semibold cursor-pointer text-sm'><a href="">Approve</a></span>
                                        <span className='border border-amber-600 text-amber-600 rounded p-1 font-semibold cursor-pointer hover:bg-amber-600 hover:text-white duration-500 text-sm'><a href="">Approve</a></span>
                                    </span>
                                </span>
                            </div>

                            <div className='flex gap-1 p-2'>
                                <span className='p-1 bg-gray-100 rounded-full w-12 h-12 '><img src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-30.jpg" className=' rounded-full cursor-pointer' /> </span>
                                <span className=''>
                                    <span className='font-bold text-gray-800 text-[12px]'> Lex Murphy requested access to...</span><br />
                                    <span className='text-sm'>Today at 12:00 PM</span>
                                </span>
                            </div>

                            <div className='flex gap-1 p-2'>
                                <span className='p-1 bg-gray-100 rounded-full w-12 h-12 '><img src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-33.jpg" className=' rounded-full cursor-pointer' /> </span>
                                <span className=''>
                                    <span className='font-semibold text-gray-800 text-[12px]'> Lex Murphy requested access to...</span><br />
                                    <span className='text-sm'>Today at 5:00 PM</span>
                                </span>
                            </div>

                        </div>

                        {/* 3-right side start */}
                        <div className='border border-gray-300  rounded shadow bg-white'>

                            <div className="relative">
                                <div className='flex justify-between border-b border-gray-300 p-3.5'>
                                    <span className='text-gray-700 font-bold'>Meetings Schedule</span>
                                    <span
                                        className={`flex gap-1 border border-gray-300 p-1  rounded cursor-pointer hover:text-amber-500 duration-500`}
                                        onClick={() => setShowDropdown(!showDropdown)}
                                    >
                                        <span className='pt-0.5'><CiCalendarDate /></span>
                                        <span className='text-sm font-semibold'>Today</span>
                                    </span>
                                </div>

                                {showDropdown && (
                                    <div className="absolute right-3 top-16 bg-white shadow-lg border border-gray-300 rounded w-40">
                                        <ul className="flex flex-col p-2">
                                            <li className="p-2 hover:bg-amber-500 hover:text-white cursor-pointer">Today</li>
                                            <li className="p-2 hover:bg-amber-500 hover:text-white cursor-pointer">This Week</li>
                                            <li className="p-2 hover:bg-amber-500 hover:text-white cursor-pointer">This Month</li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="flex gap-5 items-center p-2 justify-between   hover:shadow transition-all">
                                {/* Left container */}
                                <div className="text-start ">
                                    <div className="flex items-center">
                                        <span className="text-sm text-gray-500">09:25 AM</span>
                                        <span className="text-amber-600 text-lg "><GoDotFill /></span>
                                    </div>
                                </div>

                                {/* Right container */}
                                <div className="text-start bg-gray-200 p-2 pr-10 rounded">
                                    <div className="space-y-1 text-[12px]">
                                        <p className="font-bold text-gray-800">Marketing Strategy</p>
                                        <p className="font-bold text-gray-800">Presentation</p>
                                        <p className="font-bold text-gray-800">Project</p>
                                        <p className="text-sm text-gray-500">Marketing</p>
                                    </div>
                                </div>

                            </div>

                            <div className="flex gap-5 items-center p-2 justify-between  hover:shadow transition-all">
                                {/* Left container */}
                                <div className="">
                                    <div className="flex items-center">
                                        <span className="text-sm text-gray-500">09:20 AM</span>
                                        <span className="text-green-600 text-lg"><GoDotFill /></span>
                                    </div>
                                </div>

                                {/* Right container */}
                                <div className="text-start bg-gray-200 p-2 rounded">
                                    <div className="space-y-1 text-[12px]">
                                        <p className="font-bold text-gray-800"> Design Review Hospital,</p>
                                        <p className="font-bold text-gray-800">doctors Management</p>
                                        <p className="font-bold text-gray-800">Project</p>
                                        <p className="text-sm text-gray-500">Review</p>
                                    </div>
                                </div>

                            </div>

                            <div className="flex gap-5 items-center p-2 hover:shadow justify-between transition-all">
                                {/* Left container */}
                                <div className="">
                                    <div className="flex items-center">
                                        <span className="text-sm text-gray-500">09:18 AM</span>
                                        <span className="text-amber-400 text-lg"><GoDotFill /></span>
                                    </div>
                                </div>

                                {/* Right container */}
                                <div className="text-start bg-gray-200 p-2 rounded">
                                    <div className="space-y-1 text-[12px]">
                                        <p className="font-bold text-gray-800">  Birthday Celebration of</p>
                                        <p className="font-bold text-gray-800">Employee</p>
                                        <p className="text-sm text-gray-500">Celebration</p>

                                    </div>
                                </div>

                            </div>

                            <div className="flex gap-5 items-center p-2 hover:shadow justify-between transition-all">
                                {/* Left container */}
                                <div className="">
                                    <div className="flex  items-center">
                                        <span className="text-sm text-gray-500">09:25 AM</span>
                                        <span className="text-amber-600 text-lg"><GoDotFill /></span>
                                    </div>
                                </div>

                                {/* Right container */}
                                <div className="text-start bg-gray-200 p-2 rounded">
                                    <div className="space-y-1 text-[12px]">
                                        <p className="font-bold text-gray-800">   Update of Project Flow</p>
                                        <p className="text-sm text-gray-500">Development</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


