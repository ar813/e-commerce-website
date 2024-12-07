import FancyHeading from "../FancyHeading/FancyHeading"
import Card from "./Card"
import { CiCamera } from "react-icons/ci";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
const Categories = () => {
  return (
    <div className="px-[20px] py-[80px] border-y-[1px] border-y-[#ccc]">
      <FancyHeading heading="Categories" />
      <div className="flex items-center justify-between">
        <h1 className="mt-[20px] text-[25px] lg:text-[36px] font-Inter font-[600]">Browse By Category</h1>
        <div className="hidden md:flex items-center gap-[8px]">
          <GoArrowLeft className="bg-[#F5F5F5] text-[46px] rounded-[50%] p-[10px]" />
          <GoArrowRight className="bg-[#F5F5F5] text-[46px] rounded-[50%] p-[10px]" />
        </div>
      </div>
      <div className="mt-[60px] grid gap-[30px] min-[425px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        <Card heading="Phones" picture="one" />
        <Card heading="Computers" picture="two" />
        <Card heading="SmartWatch" picture="three" />
        <div className="w-full rounded-[4px] h-[145px] flex items-center justify-center border-[1px] border-[#ccc]">
          <div className="flex flex-col items-center">
            <CiCamera className="text-[56px]" />
            <p className="text-[16px] font-Poppins mt-[8px] text-center">Camera</p>
          </div>
        </div>
        <Card heading="HeadPhones" picture="five" />
        <Card heading="Gaming" picture="six" />
      </div>
    </div>
  )
}

export default Categories