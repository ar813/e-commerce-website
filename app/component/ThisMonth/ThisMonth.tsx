import React from 'react'
import FancyHeading from "../FancyHeading/FancyHeading"
import Button from "../Button/Button"
import Card from './Card'

const ThisMonth = () => {
    return (
        <div className="px-[20px] py-[80px]">
            <FancyHeading heading="This Month" />
            <div className="flex items-center justify-between ">
                <h1 className="mt-[20px] text-[25px] lg:text-[36px] font-Inter font-[600]">Best Selling Products</h1>
                <div className="hidden md:flex items-center gap-[8px]">
                    <Button value="View All"></Button>
                </div>
            </div>
            <div className='grid gap-[30px] mt-[60px] sm:grid-cols-2 lg:grid-cols-4'>
                <Card heading="The north coat" newPrice="$260" oldPice="$360" rankingNumber="(65)" color="text-[#FFAD33]" picture="one" width="w-[180px]" />
                <Card heading="Gucci duffle bag" newPrice="$960" oldPice="$1160" rankingNumber="(65)" color="text-[gray]" picture="two" width="w-[190px]" />
                <Card heading="RGB liquid CPU Cooler" newPrice="$160" oldPice="$170" rankingNumber="(65)" color="text-[gray]" picture="three" width="w-[190px]" />
                <Card heading="Small BookSelf" newPrice="$360" rankingNumber="(65)" color="text-[#FFAD33]" picture="four" width="w-[150px]" />
            </div>
            <div className='mt-[50px] flex justify-center items-center md:hidden'>
                <Button value="View All"></Button>
            </div>
        </div>
    )
}

export default ThisMonth