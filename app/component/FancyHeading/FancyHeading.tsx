type Card = {
  heading:string,
}

const FancyHeading = ({heading}:Card) => {
  return (
    <div className="flex gap-[16px] items-center">
        <div className="w-[20px] h-[40px] bg-primary rounded-[4px]"></div>
        <h1 className="text-primary font-Poppins text-[16px] font-[600]">{heading}</h1>
    </div>
  )
}

export default FancyHeading