import WishListCard from "../component/WishListCard/WishListCard"
import FancyHeading from "../component/FancyHeading/FancyHeading"
import WishListCardTwo from "../component/WishListCard/wishListCardTwo"

const page = () => {
  return (
    <div className="lg:p-[80px] p-[30px] grid gap-[40px] lg:gap-[50px] font-Poppins">
      <div className='grid gap-[40px] lg:gap-[60px]'>
        <div className="flex items-center justify-between">
          <h1 className="text-[20px]">Wishlist (4)</h1>
          <button className="text-[black] text-[16px] font-[500] border-[1px] border-[#ccc] rounded-[4px] hidden md:block w-[223px] h-[56px]">Move All To Bag</button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[40px]">
          <WishListCard heading="Gucci duffle bag" newPrice="960" oldPice="1190" picture="one" width="w-[150px]" />
          <WishListCard heading="RGB liquid CPU Cooler" newPrice="1960" picture="two" width="w-[150px]" />
          <WishListCard heading="GP11 Shooter USB Gamepad" newPrice="550" picture="three" width="w-[150px]" />
          <WishListCard heading="Quilted Satin Jacket" newPrice="750" picture="four" width="w-[150px]" />
        </div>
        <div className="flex justify-center items-center">
          <button className="text-[black] text-[16px] font-[500] border-[1px] border-[#ccc] rounded-[4px] md:hidden w-[223px] h-[56px]">Move All To Bag</button>
        </div>
      </div>
      <div className='grid gap-[40px] lg:gap-[60px] mb-[10px]'>
        <div className="flex items-center justify-between">
          <FancyHeading heading="Just For You" />
          <button className="text-[black] text-[16px] font-[500] border-[1px] border-[#ccc] rounded-[4px] hidden md:block w-[150px] h-[56px]">See All</button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[40px]">
          <WishListCardTwo heading="ASUS FHD Gaming Laptop" newPrice="$960" oldPice="$1160" rankingNumber="(65)" color="text-[#FFAD33]" picture="one" width="w-[180px]" />
          <WishListCardTwo heading="IPS LCD Gaming Monitor" newPrice="$1160" rankingNumber="(65)" color="text-[#FFAD33]" picture="two" width="w-[180px]" />
          <WishListCardTwo heading="HAVIT HV-G92 Gamepad" newPrice="$560" rankingNumber="(65)" color="text-[#FFAD33]" picture="three" width="w-[180px]" />
          <WishListCardTwo heading="AK-900 Wired Keyboard" newPrice="$200" rankingNumber="(65)" color="text-[#FFAD33]" picture="four" width="w-[180px]" />
        </div>
        <div className="flex justify-center items-center">
          <button className="text-[black] text-[16px] font-[500] border-[1px] border-[#ccc] rounded-[4px] md:hidden w-[150px] h-[56px]">See All</button>
        </div>
      </div>
    </div>
  )
}

export default page