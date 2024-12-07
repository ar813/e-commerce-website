import Image from "next/image"
import CardOne from "../component/about/CardOne/CardOne"
import CardTwo from "../component/about/CardTwo/CardTwo"
import Card from "../component/LastInHome/Card"

const page = () => {
    return (
        <div className="px-[20px] py-[50px] lg:py-[80px] lg:pr-[0px] lg:pl-[70px]">
            <p className="text-[14px] mb-[50px] lg:mb-[80px]"><span className="text-[#ccc]">Home</span><span className="text-[#ccc] mx-[5px]">/</span>About</p>
            <div className="flex flex-col gap-[60px] lg:flex-row">
                <div className="font-Poppins flex flex-col gap-[20px] lg:items-center lg:justify-center">
                    <h1 className="font-Inter text-[54px] font-[600]">Our Story</h1>
                    <p>Launced in 2015, Exclusive is South Asia&apos;s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                </div>
                <Image src={"/images/about/girls.svg"} alt={"girls"} width={100} height={100} className="w-full lg:w-[837px] lg:h-[609px]"></Image>
            </div>
            <div className="mt-[50px] grid gap-[30px] sm:grid-cols-2 lg:mt-[100px] lg:grid-cols-4 lg:pr-[60px]">
                <CardOne picture="one" heading="10.5K" subHeading="Sallers active our site" />
                <CardOne picture="two" heading="33K" subHeading="Mopnthly Produduct Sale" />
                <CardOne picture="three" heading="45.5K" subHeading="Customer active in our site" />
                <CardOne picture="four" heading="25K" subHeading="Anual gross sale in our site" />
            </div>
            <div className="mt-[50px] grid gap-[30px] sm:grid-cols-3 lg:mt-[100px] lg:pr-[60px]">
                <CardTwo picture="five" heading="Tom Cruise" subHeading="Founder & Chairman" />
                <CardTwo picture="six" heading="Emma Watson" subHeading="Managing Director" />
                <CardTwo picture="seven" heading="Will Smith" subHeading="Product Designer" />
            </div>
            <div className="mt-[50px] lg:mt-[100px] grid gap-[88px] my-[60px] mb-[100px] lg:grid-cols-3 lg:px-[100px]">
                <Card picture="one" heading="FREE AND FAST DELIVERY" subHeading="Free delivery for all orders over $140" />
                <Card picture="two" heading="24/7 CUSTOMER SERVICE" subHeading="Friendly 24/7 customer support" />
                <Card picture="three" heading="MONEY BACK GUARANTEE" subHeading="We reurn money within 30 days" />
            </div>
        </div>
    )
}

export default page