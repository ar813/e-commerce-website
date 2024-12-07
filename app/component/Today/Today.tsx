import Image from "next/image"
import FancyHeading from "../FancyHeading/FancyHeading"
import Card from "./Card"
import Button from "../Button/Button"
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const Today = () => {
  return (
    <div className="px-[20px] py-[80px] grid gap-[40px] lg:mt-[50px]">
      <FancyHeading heading="Today's" />
      <div className="flex flex-col gap-[20px] sm:flex-row justify-between items-center">
        <h1 className="font-Inter text-[36px] font-[600]">Flash Sales</h1>
        <Image src={"/images/time.svg"} alt="time" width={100} height={100} className="w-[302px] min-[640px]:m-auto"></Image>
        <div className="w-[402px] hidden lg:block"></div>
        <div className="hidden md:flex items-center gap-[8px]">
          <GoArrowLeft className="bg-[#F5F5F5] text-[46px] rounded-[50%] p-[10px]" />
          <GoArrowRight className="bg-[#F5F5F5] text-[46px] rounded-[50%] p-[10px]" />
        </div>
      </div>
      <div className="grid gap-[40px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card percentage="-40%" heading="HAVIT HV-G92 Gamepad" newPrice="$120" oldPice="$160" rankingNumber="(88)" color="text-[#FFAD33]" picture="one" width="w-[190px]" />
        <Card percentage="-35%" heading="AK-900 Wired Keyboard" newPrice="$960" oldPice="$1160" rankingNumber="(75)" color="text-[gray]" picture="two" width="w-[190px]" />
        <Card percentage="-30%" heading="IPS LCD Gaming Monitor" newPrice="$370" oldPice="$400" rankingNumber="(99)" color="text-[#FFAD33]" picture="three" width="w-[190px] md:w-[150px] " />
        <Card percentage="-25%" heading="S-Series Comfort Chair " newPrice="$375" oldPice="$400" rankingNumber="(99)" color="text-[gray]" picture="four" width="w-[100px]" />
      </div>
      <div className="mt-[20px] flex items-center justify-center">
        <Button value="View All Products" />
      </div>
    </div>
  )
}

export default Today