type button = {
  value: string,
  color?: string,
}


const Button = ({value, color}:button) => {
  return (
    <div>
        <button className={` ${color} py-[16px] px-[48px] bg-primary text-white font-Poppins font-[500] text-[16px] rounded-[4px]`}>{value}</button>
    </div>
  )
}

export default Button