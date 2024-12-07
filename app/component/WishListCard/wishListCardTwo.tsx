"use client"

import Image from "next/image"
import { FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";

type Card = {
    heading: string,
    newPrice: string,
    oldPice?:string,
    rankingNumber: string,
    color: string,
    picture: string,
    width: string,
}

const WishListCardTwo = ({heading, newPrice, oldPice, rankingNumber, color, picture, width}:Card) => {
    
    const [value, setValue] = useState(false)

    return (
        <div className="grid gap-[16px]" onMouseEnter={()=>{setValue(true)}} onMouseLeave={()=>{setValue(false)}}>
            <div className="w-full h-[250px] bg-[rgb(245,245,245)] p-4 relative rounded-[4px]">
                <div className="grid gap-[8px] text-[29px] absolute right-[14px] ">
                    <IoEyeOutline className="bg-white rounded-[50%] p-[5px]" />
                </div>
                <div className={` ${value ? "block" : "hidden"} w-full bg-[black]   text-white absolute bottom-0 left-0 h-[41px] flex items-center justify-center`}>
                    <IoCartOutline className="text-[25px] mr-[15px]" />
                    <h1 className="font-Poppins font-[500] text-[16px]">Add To Cart</h1>
                </div>
                <Image src={`/images/wishList/${picture}.svg`} alt={picture} width={100} height={100} className={`${width} m-auto h-[250px]`}></Image>
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

export default WishListCardTwo