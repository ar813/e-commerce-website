import Image from "next/image"

type Card = {
  heading:string,
  picture:string,
}

const Card = ({heading, picture}:Card) => {
  return (
    <div className="w-full rounded-[4px] h-[145px] flex items-center justify-center border-[1px] border-[#ccc]">
        <div className="flex flex-col items-center">
            <Image src={`/images/categories/${picture}.svg`} alt={picture} width={100} height={100} className="w-[56px]"></Image>   
            <p className="text-[16px] font-Poppins mt-[8px] text-center">{heading}</p> 
        </div> 
    </div>
  )
}

export default Card