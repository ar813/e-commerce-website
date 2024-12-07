import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { PiArrowRightThin } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="lg:flex">
            <div className="hidden lg:block w-[25%] pr-[20px] border-r-[1px] border-r-[#ccc] lg:pt-[48px]">
                <div className="flex justify-end ">
                    <div className="grid gap-[16px] font-Poppins text-[16px] w-[217px]">
                        <p className="flex items-center justify-between">Woman&apos;s Fashion <FaAngleRight /></p>
                        <p className="flex items-center justify-between">Men&apos;s Fashion <FaAngleRight /></p>
                        <p>Electronics</p>
                        <p>Home & Lifestyle</p>
                        <p>Medicine</p>
                        <p>Sports & Outdoor</p>
                        <p>Baby&apos;s & Toys</p>
                        <p>Groceries & Pets</p>
                        <p>Health & Beauty</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-[892px] lg:h-[344px] lg:ml-[40px] text-white bg-black p-[30px] sm:p-[50px] pb-0 sm:pb-[50px] flex flex-col sm:flex-row lg:mt-[48px] ">
                <div className="sm:w-[50%] flex flex-col items-center justify-center">
                    <div>
                        <div className="flex items-center gap-[18px] sm:gap-[24px] justify-start">
                            <FaApple className="text-[30px] sm:text-[40px]" />
                            <p className="text-[14px] sm:text-[16px] font-Poppins">iPhone 14 Series</p>
                        </div>
                        <h1 className=" text-start font-Inter text-[35px] sm:text-[48px] font-[600] my-[10px]">Up to 10% <br /> off Voucher</h1>
                        <p className="flex items-center justify-start underline underline-offset-8 gap-[8px]">Shop Now <PiArrowRightThin className="text-[24px]" /></p>
                    </div>
                </div>
                <Image src={"/images/mobile.svg"} width={100} height={100} alt="mobile" className="w-full sm:w-[50%] mt-[40px]"></Image>
            </div>
        </div>
    )
}

export default Hero