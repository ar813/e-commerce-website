import Image from "next/image"
import Button from "../component/Button/Button"

const page = () => {
    return (
        <div className="lg:p-[80px] p-[30px] grid gap-[40px] lg:gap-[50px] font-Poppins">
            <p className="text-[14px]"><span className="text-[#ccc]">Home</span><span className="text-[#ccc] mx-[5px]">/</span>Card</p>
            <div className="grid gap-[40px]">
                <div className="flex items-center text-center py-[20px] px-[40px] rounded-[4px] shadow-[0px_0px_1px_gray] font-Poppins">
                    <p className="w-[25%] text-start">Product</p>
                    <p className="w-[25%]">Price</p>
                    <p className="w-[25%]">Quantity</p>
                    <p className="w-[25%]">Subtotal</p>
                </div>
                <div className="flex items-center text-center py-[20px] px-[40px] rounded-[4px] shadow-[0px_0px_1px_gray] font-Poppins">
                    <div className="flex items-center gap-[10px] w-[25%]">
                        <Image src={"/images/tv.svg"} alt="tv" width={54} height={54}></Image>
                        <p>LCD Monitor</p>
                    </div>
                    <p className="w-[25%]">$650</p>
                    <div className="w-[25%]">
                        <input type="number" placeholder="01" className="w-[50px] border-[1px] border-[gray] p-[5px] rounded-[4px]" />
                    </div>
                    <p className="w-[25%]">$650</p>
                </div>
                <div className="flex items-center text-center py-[20px] px-[40px] rounded-[4px] shadow-[0px_0px_1px_gray] font-Poppins">
                    <div className="flex items-center gap-[10px] w-[25%]">
                        <Image src={"/images/game.svg"} alt="tv" width={54} height={54}></Image>
                        <p>H1 Gamepad</p>
                    </div>
                    <p className="w-[25%]">$550</p>
                    <div className="w-[25%]">
                        <input type="number" placeholder="02" className="w-[50px] border-[1px] border-[gray] p-[5px] rounded-[4px]" />
                    </div>
                    <p className="w-[25%]">$1100</p>
                </div>
            </div>
            <div className="flex items-start justify-between font-Poppins font-[500]">
                <button className="py-[10px] px-[20px] border-[1px] border-black rounded-[4px]">Return To Shop</button>
                <button className="py-[10px] px-[20px] border-[1px] border-black rounded-[4px]">Update Cart</button>
            </div>
            <div className="lg:relative lg:pb-[250px] flex flex-col lg:flex-row lg:justify-between gap-[40px] lg:gap-[0px]">
                <div className="flex items-center gap-[16px] flex-col md:flex-row">
                    <input type="text" placeholder="Coupon Code" className="py-[15px] px-[20px] rounded-[4px] border-[1px] border-black" />
                    <Button value="Apply Coupon" />
                </div>
                <div className="lg:absolute right-0 p-[25px] border-[1px] border-[black] rounded-[4px] font-Poppins">
                    <h1 className="text-[20px] font-[500] mb-[20px]">Cart Total</h1>
                    <div className="flex justify-between items-center mb-[20px] border-b-[2px] border-b-[#ccc]">
                        <p>Subtotal:</p>
                        <p>$1750</p>
                    </div>
                    <div className="flex justify-between items-center mb-[20px] border-b-[2px] border-b-[#ccc]">
                        <p>Shipping:</p>
                        <p>Free</p>
                    </div>
                    <div className="flex justify-between items-center mb-[20px]">
                        <p>Total:</p>
                        <p>$1750</p>
                    </div>
                    <Button value="Procees to checkout" />
                </div>
            </div>
        </div>
    )
}

export default page