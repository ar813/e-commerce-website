import Image from "next/image"

const HeroTwo = () => {
    return (
        <div>
            <div className="mt-[40px] w-full text-white bg-black p-[30px] lg:p-[50px]  flex flex-col lg:flex-row lg:justify-around">
                <div className="flex flex-col items-center justify-center">
                    <div className="grid gap-[25px]">
                        <p className="text-[#00FF66] font-Poppins font-[600] text-[16px]">Categories</p>
                        <h1 className="font-Poppins font-[600] text-[25px] sm:ext-[48px]">Enhance Your <br /> Music Experience</h1>
                        <div className="flex gap-[24px]">
                            <div className="bg-white font-Poppins rounded-[50%] p-3 w-[70px] flex items-center justify-start flex-col text-black">
                                <h1 className="font-[600] text-[16px]">23</h1>
                                <p className="text-[11px]">Hours</p>
                            </div>
                            <div className="bg-white font-Poppins rounded-[50%] p-3 w-[70px] flex items-center justify-start flex-col text-black">
                                <h1 className="font-[600] text-[16px]">05</h1>
                                <p className="text-[11px]">Days</p>
                            </div>
                            <div className="bg-white font-Poppins rounded-[50%] p-3 w-[70px] flex items-center justify-start flex-col text-black">
                                <h1 className="font-[600] text-[16px]">59</h1>
                                <p className="text-[11px]">Minutes</p>
                            </div>
                            <div className="bg-white font-Poppins rounded-[50%] p-3 w-[70px] hidden sm:flex items-center justify-start flex-col text-black">
                                <h1 className="font-[600] text-[16px]">35</h1>
                                <p className="text-[11px]">Seconds</p>
                            </div>
                        </div>
                        <button className="w-[171px] h-[56px] bg-[#00FF66] text-white font-Poppins font-[500] text-[16px] rounded-[4px]">Buy Now!</button>
                    </div>
                </div>
                <div className="flex items-center justify-center lg:w-[50%]">
                    <Image src={"/images/speaker.svg"} width={100} height={100} alt="mobile" className="w-full min-[425px]:w-[400px] mt-[40px]"></Image>
                </div>
            </div>
        </div>
    )
}

export default HeroTwo