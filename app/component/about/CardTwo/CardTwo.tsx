import Image from "next/image"
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

type Card = {
    picture: string,
    heading: string,
    subHeading: string
}

const CardTwo = ({ picture, heading, subHeading }: Card) => {
    return (
        <div>
            <Image src={`/images/about/${picture}.svg`} alt="one" width={80} height={80} className="w-full"></Image>
            <h1 className="font-[500] font-Inter text-[24px] mt-[20px]">{heading}</h1>
            <p className="mt-[10px]">{subHeading}</p>
            <div className="flex text-[15px] items-center gap-[16px] mt-[16px]">
                <FiTwitter />
                <FaInstagram />
                <FaLinkedinIn />
            </div>
        </div>
    )
}

export default CardTwo