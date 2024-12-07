import Image from "next/image"
import FancyHeading from "../FancyHeading/FancyHeading"

const Featured = () => {
    return (
        <div className="px-[20px]">
            <div>
                <FancyHeading heading="Our Products" />
                <div className="flex items-center justify-start">
                    <h1 className="mt-[20px] text-[25px] lg:text-[36px] font-Inter font-[600]">Explore Our Products</h1>
                </div>
            </div>
            <div className="mt-[60px] grid gap-[30px] sm:grid-cols-4 sm:grid-rows-2">
                <Image src={"/images/featured/one.svg"} width={100} height={100} alt="one" className="w-full sm:col-span-2 sm:row-span-4" />
                <Image src={"/images/featured/two.svg"} width={100} height={100} alt="two" className="w-full sm:col-span-2  sm:row-span" />
                <Image src={"/images/featured/three.svg"} width={100} height={100} alt="three" className="w-full sm:col-span-1  sm:row-span-1" />
                <Image src={"/images/featured/four.svg"} width={100} height={100} alt="four" className="w-full  sm:col-span-1  sm:row-span-1" />
            </div>
        </div>
    )
}

export default Featured