import React, { useState } from 'react'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <>
      <div className='flex justify-between items-center p-3 border border-gray-100 shadow'>
        <div>2014 - 2025 © SmartHR.</div>
        <div>Designed & Developed By <Link className='text-orange-500' to={"https://www.techbro24.com"}>TeccBro24</Link></div>
      </div>
    </>
  )
}
