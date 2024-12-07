"use client"

import Image from "next/image"
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";

type Card = {
    percentage:string,
    heading: string,
    newPrice: string,
    oldPice:string,
    rankingNumber: string,
    color: string,
    picture: string,
    width: string,
}


const Card = ({ percentage, heading, newPrice, oldPice, rankingNumber, color, picture, width }: Card) => {

    const [value, setValue] = useState(false)

    return (
        <div className="grid gap-[16px]" onMouseEnter={() => { setValue(true) }} onMouseLeave={() => { setValue(false) }}>
                <div className="w-full h-[250px] bg-[rgb(245,245,245)] p-4 relative rounded-[4px]">
                    <div className="bg-primary w-[55px] h-[26px] rounded-[4px] flex justify-center items-center absolute">
                        <p className="font-Poppins text-[12px] text-white">{percentage}</p>
                    </div>
                    <div className="grid gap-[8px] text-[29px] absolute right-[14px] ">
                        <FaRegHeart className="bg-white rounded-[50%] p-[5px]" />
                        <IoEyeOutline className="bg-white rounded-[50%] p-[5px]" />
                    </div>
                    <div className={` ${value ? "block" : "hidden"} w-full bg-[black] text-white absolute bottom-0 left-0 h-[41px] flex items-center justify-center`}>
                        <h1 className="font-Poppins font-[500] text-[16px]">Add To Cart</h1>
                    </div>
            <Link href={"/productDetailedPage"}>
                    <Image src={`/images/today/${picture}.svg`} alt={picture} width={100} height={100} className={`${width} m-auto h-[250px]`}></Image>
            </Link>
                </div>
            <h1 className="font-Poppins font-[500] text-[16px]">{heading}</h1>
            <div className="flex text-[16px] font-Poppins font-[500] gap-[12px]">
                <p className="text-primary">{newPrice}</p>
                <p className="line-through text-[gray]">{oldPice}</p>
            </div>
            <div className="text-[18px] flex items-center gap-[8px]">
                <FaStar className="text-[#FFAD33]" />
                <FaStar className="text-[#FFAD33]" />
                <FaStar className="text-[#FFAD33]" />
                <FaStar className="text-[#FFAD33]" />
                <FaStar className={color} />
                <p className="font-Poppins font-[600] text-[14px] text-[gray]">{`${rankingNumber}`}</p>
            </div>
        </div>
    )
}

export default Card