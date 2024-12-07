import Image from "next/image"
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import FancyHeading from "../component/FancyHeading/FancyHeading"
import Card from "../component/Today/Card"

const page = () => {
    return (
        <div className="px-[20px] py-[60px] lg:pl-[60px] lg:py-[100px]">
            <p className="text-[14px] mb-[50px] lg:mb-[80px] text-[#ccc] font-Poppins">Account<span className="text-[#ccc] mx-[5px]">/</span>Gaming<span className="text-[#ccc] mx-[5px]">/</span><span className="text-[black]">Havic HV G-92 Gamepad</span></p>
            <div className="flex flex-col gap-[50px] lg:flex-row">
                <div className="flex flex-col md:flex-row gap-[40px] justify-center">
                    <div className="flex justify-center">
                        <div className="grid gap-[20px] grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                            <Image src={"/images/detailed/one.svg"} alt="one" width={100} height={100} className="w-[170px]"></Image>
                            <Image src={"/images/detailed/two.svg"} alt="two" width={100} height={100} className="w-[170px]"></Image>
                            <Image src={"/images/detailed/three.svg"} alt="three" width={100} height={100} className="w-[170px]"></Image>
                            <Image src={"/images/detailed/four.svg"} alt="four" width={100} height={100} className="w-[170px]"></Image>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Image src={"/images/detailed/five.svg"} alt="five" width={100} height={100} className="w-full md:w-[500px] lg:h-[600px]"></Image>
                    </div>
                </div>
                <div className="sm:flex justify-center items-center">
                    <div className="grid gap-[18px] sm:w-[450px]">
                        <h1 className="font-Inter font-[600] text-[24px]">Havic HV G-92 Gamepad</h1>
                        <div className="text-[18px] flex items-center gap-[16px]">
                            <FaStar className="text-[#FFAD33]" />
                            <FaStar className="text-[#FFAD33]" />
                            <FaStar className="text-[#FFAD33]" />
                            <FaStar className="text-[#FFAD33]" />
                            <FaStar className="text-[#ccc]" />
                            <p className="font-Poppins text-[14px] text-[gray] hidden sm:block">&lpar;150 Reviews&rpar;</p>
                            <p className="font-Poppins text-[14px] text-[gray]">|</p>
                            <p className="font-Poppins text-[14px] text-[#00FF66]">In Stock</p>
                        </div>
                        <h1 className="font-Inter text-[24px]">$192.00</h1>
                        <p className="font-Poppins text-[14px] pb-[20px] border-b-[1px] border-b-[#ccc]">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                        <div className="flex gap-[24px] items-center">
                            <h1 className="font-Inter text-[20px]">Colours:</h1>
                            <div className="flex gap-[9px]">
                                <GoDotFill className="text-[30px] text-[#A0BCE0]" />
                                <GoDotFill className="text-[30px] text-primary" />
                            </div>
                        </div>
                        <div className="flex gap-[24px]">
                            <h1 className="font-Inter text-[20px]">Size:</h1>
                            <div className="flex gap-[16px] font-[500] text-[14px] font-Poppins">
                                <div className="w-[32px] h-[32px] flex items-center justify-center border-[1px] border-[black] rounded-[4px]">XS</div>
                                <div className="w-[32px] h-[32px] flex items-center justify-center border-[1px] border-[black] rounded-[4px]">S</div>
                                <div className="w-[32px] h-[32px] flex items-center justify-center border-[1px] border-[black] rounded-[4px]">M</div>
                                <div className="w-[32px] h-[32px] flex items-center justify-center border-[1px] border-[black] rounded-[4px]">L</div>
                                <div className="w-[32px] h-[32px] flex items-center justify-center border-[1px] border-[black] rounded-[4px]">XL</div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[0px] justify-between font-[500] text-[16px] font-Poppins">
                            <div className="text-[20px] flex">
                                <div className="w-[40px] h-[44px] flex items-center justify-center border-[1px] border-[#ccc] rounded-l-[4px]">-</div>
                                <div className="w-[80px] h-[44px] flex items-center justify-center border-[1px] border-[#ccc]">02</div>
                                <div className="w-[40px] h-[44px] flex items-center justify-center border-[1px] border-[#ccc] rounded-r-[4px]">+</div>
                            </div>
                            <div>
                                <button className="w-[165px] h-[44px] text-[14px] bg-primary text-white rounded-[4px]">Buy Now</button>
                            </div>
                            <div className="hidden sm:flex w-[40px] h-[44px] items-center justify-center border-[1px] border-[#ccc] rounded-[4px]">
                                <CiHeart className="text-[25px]" />
                            </div>
                        </div>
                        <Image src={"/images/freeDelevery.svg"} alt="freeDelevery" width={100} height={100} className="w-full md:w-[500px] mt-[20px] lg:w-[399px] lg:h-[180px]"></Image>
                    </div>
                </div>
            </div>
            <div className="mt-[100px] grid gap-[50px]">
                <FancyHeading heading="Related Item" />
                <div className="grid gap-[40px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <Card percentage="-40%" heading="HAVIT HV-G92 Gamepad" newPrice="$120" oldPice="$160" rankingNumber="(88)" color="text-[#FFAD33]" picture="one" width="w-[190px]" />
                    <Card percentage="-35%" heading="AK-900 Wired Keyboard" newPrice="$960" oldPice="$1160" rankingNumber="(75)" color="text-[gray]" picture="two" width="w-[190px]" />
                    <Card percentage="-30%" heading="IPS LCD Gaming Monitor" newPrice="$370" oldPice="$400" rankingNumber="(99)" color="text-[#FFAD33]" picture="three" width="w-[190px] md:w-[150px] " />
                    <Card percentage="-25%" heading="S-Series Comfort Chair " newPrice="$375" oldPice="$400" rankingNumber="(99)" color="text-[gray]" picture="four" width="w-[100px]" />
                </div>
            </div>
        </div>
    )
}

export default page