import Image from "next/image";
import Button from "../component/Button/Button"

const page = () => {
    return (
        <div className="px-[20px] pb-[70px] py-[50px] lg:p-[100px] lg:pb-[150px] ">
            <p className="text-[14px] mb-[50px] lg:mb-[80px]"><span className="text-[#ccc]">Home</span><span className="text-[#ccc] mx-[5px]">/</span>Contact</p>
            <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[100px]">
                <div className="flex items-center justify-center">
                    <div className="grid gap-[32px]">
                        <div className="grid gap-[24px] pb-[32px] border-b-[1px] border-b-[#ccc]">
                            <div className="flex gap-[16px]  items-center ">
                                <Image src="/images/telephone.svg" alt="telephone" width={40} height={40}></Image>
                                <h1 className="font-[500]">Call To Us</h1>
                            </div>
                            <p className="text-[14px]">We are available 24/7, 7 days a week.</p>
                            <p className="text-[14px]">Phone: +8801611112222</p>
                        </div>
                        <div className="grid gap-[24px]">
                            <div className="flex gap-[16px] items-center">
                                <Image src="/images/email.svg" alt="telephone" width={40} height={40}></Image>
                                <h1 className="font-[500]">Write To US</h1>
                            </div>
                            <p className="text-[14px]">Fill out our form and we will contact you within 24 hours.</p>
                            <p className="text-[14px]">Emails: customer@exclusive.com</p>
                            <p className="text-[14px]">Emails: support@exclusive.com</p>
                        </div>
                    </div>
                </div>

                <div className="grid gap-[32px]">
                    <div className="flex flex-col gap-[16px] lg:flex-row lg:justify-between">
                        <input type="text" placeholder="Your Name *" className="bg-[#F5F5F5] text-[gray] py-[13px] px-[16px] outline-none" />
                        <input type="text" placeholder="Your Email *" className="bg-[#F5F5F5] text-[gray] py-[13px] px-[16px] outline-none" />
                        <input type="text" placeholder="Your Phone *" className="bg-[#F5F5F5] text-[gray] py-[13px] px-[16px] outline-none" />
                    </div>
                    <textarea placeholder="Your Massage" className="bg-[#F5F5F5] text-[gray] py-[13px] px-[16px] h-[207px] outline-none"></textarea>
                    <div className="flex items-center justify-end">
                        <Button value="Send Massage"></Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page