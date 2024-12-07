import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import FancyHeading from "../FancyHeading/FancyHeading"
import Card from "./Card";
import Button from "../Button/Button";

const Products = () => {
    return (
        <div className="px-[20px] py-[80px]">
            <div>
                <FancyHeading heading="Our Products" />
                <div className="flex items-center justify-between">
                    <h1 className="mt-[20px] text-[25px] lg:text-[36px] font-Inter font-[600]">Explore Our Products</h1>
                    <div className="hidden md:flex items-center gap-[8px]">
                        <GoArrowLeft className="bg-[#F5F5F5] text-[46px] rounded-[50%] p-[10px]" />
                        <GoArrowRight className="bg-[#F5F5F5] text-[46px] rounded-[50%] p-[10px]" />
                    </div>
                </div>
            </div>
            <div className="grid gap-[30px] mt-[60px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Card heading="Breed Dry Dog Food" newPrice="$100" rankingNumber="(35)" color="text-[gray]" picture="one" width="w-[180px] h-[180px] mt-[20px]" />
                <Card heading="CANON EOS DSLR Camera" newPrice="$360" rankingNumber="(95)" color="text-[gray]" picture="two" width="w-[180px] h-[200px] mt-[10px]" />
                <Card heading="ASUS FHD Gaming Laptop" newPrice="$700" rankingNumber="(325)" color="text-[#FFAD33]" picture="three" width="w-[180px] h-[200px] mt-[10px]" />
                <Card heading="Curology Product Set " newPrice="$500" rankingNumber="(145)" color="text-[gray]" picture="four" width="w-[180px] h-[200px] mt-[10px]" />
                <Card heading="Kids Electric Car" newPrice="$960" rankingNumber="(65)" color="text-[#FFAD33]" picture="five" width="w-[180px] h-[200px] mt-[10px]" />
                <Card heading="Jr. Zoom Soccer Cleats" newPrice="$1160" rankingNumber="(35)" color="text-[#FFAD33]" picture="six" width="w-[180px] h-[200px] mt-[10px]" />
                <Card heading="GP11 Shooter USB Gamepad" newPrice="$660" rankingNumber="(55)" color="text-[#FFAD33]" picture="seven" width="w-[180px] h-[200px] mt-[10px]" />
                <Card heading="Quilted Satin Jacket" newPrice="$660" rankingNumber="(55)" color="text-[gray]" picture="eight" width="w-[180px] h-[200px] mt-[10px]" />
            </div>
            <div className="flex items-center justify-center mt-[60px]">
                <Button value="View All Products" />
            </div>
        </div>
    )
}

export default Products