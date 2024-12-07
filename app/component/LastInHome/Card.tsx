import Image from "next/image"
type Card = {
  heading:string,
  picture:string,
  subHeading:string
}
const Card = ({picture, heading, subHeading}:Card) => {
  return (
    <div className="font-Poppins flex flex-col items-center gap-[15px] lg:gap-[24px]">
        <Image src={`/images/LastInHome/${picture}.svg`} alt={picture} width={80} height={80} />
        <h1 className="font-[600] text-[20px]">{heading}</h1>
        <p className="text-[14px]">{subHeading}</p>
    </div>
  )
}

export default Card