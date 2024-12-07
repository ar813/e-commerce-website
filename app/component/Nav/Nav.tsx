import Link from "next/link"
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";

const Nav = () => {
  return (
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
        <IoReorderThreeOutline className="text-[25px] lg:hidden" />
      </div>
    </div>
  )
}

export default Nav