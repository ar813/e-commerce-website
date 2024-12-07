"use client"
import Link from "next/link"
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";

import { FaHome } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { TbLayoutNavbar } from "react-icons/tb";
import { BiSolidLogIn } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <div className="border-b-[0.5px] border-b-[#ccc] py-[8px] lg:py-[30px] px-[12px] flex items-center justify-between lg:justify-around">
        <h1 className="font-Inter text-[24px] font-bold">Exclusive</h1>
        <ul className="hidden lg:flex gap-[48px] font-Poppins">
          <li><Link href={"/"} className="hover:underline hover:underline-offset-4">Home</Link></li>
          <li><Link href={"/contact"} className="hover:underline hover:underline-offset-4">Contact</Link></li>
          <li><Link href={"/about"} className="hover:underline hover:underline-offset-4">About</Link></li>
          <li><Link href={"/signUp"} className="hover:underline hover:underline-offset-4">Sign Up</Link></li>
        </ul>
        <div className="flex items-center gap-[24px]">
          <div className="lg:flex items-center bg-[#F5F5F5] hidden">
            <input type="text" placeholder="What are you looking for?" className="w-[200px] bg-[#F5F5F5] h-[38px] pl-[12px] text-[12px] font-Poppins" />
            <CiSearch className="text-[25px] mr-[12px]" />
          </div>
          <Link href={"/wishList"}><CiHeart className="text-[25px]" /></Link>
          <Link href={"/cartItems"}><IoCartOutline className="text-[25px]" /></Link>
          <IoReorderThreeOutline className="text-[25px] lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </div>
      <div className={` ${isMenuOpen ? "block" : "hidden"} bg-[#2181ff] w-[70%] h-[100%] absolute right-0 p-[20px]`}>
        <ul className="grid gap-[10px] font-Poppins">
          <li><Link href={"/"}><FaHome className="inline text-[25px] mr-[20px]" />Home</Link></li>
          <li><Link href={"/contact"}><IoIosContact className="inline text-[25px] mr-[20px]" />Contact</Link></li>
          <li><Link href={"/about"}><TbLayoutNavbar className="inline text-[25px] mr-[20px]" />About</Link></li>
          <li><Link href={"/signUp"}><BiSolidLogIn className="inline text-[25px] mr-[20px]" />Sign Up</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav