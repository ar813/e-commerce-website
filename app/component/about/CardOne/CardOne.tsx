import Image from "next/image"

type Card = {
  picture:string,
  heading:string,
  subHeading:string
}

const CardOne = ({picture, heading, subHeading}:Card) => {
  return (
    <div className="p-[20px] border-[1px] border-[#ccc] rounded-[4px] flex flex-col justify-center items-center ">
        <Image src={`/images/about/${picture}.svg`} alt="one" width={80} height={80}></Image>
        <h1 className="font-Inter font-[700] text-[32px]">{heading}</h1>
        <p className="font-Poppins">{subHeading}</p>
    </div>
  )
}

export default CardOne