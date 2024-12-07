
const TopLayer = () => {
    return (
        <div className='w-full h-[48px] bg-black text-white font-Poppins text-[14px] flex items-center justify-end lg:justify-around p-[10px] pr-[20px]'>
            <div></div>
            <div className='hidden lg:flex justify-center items-center'>
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <button className='underline ml-2 font-[600]'>ShopNow</button>
            </div>
            <select className='bg-black'>
                <option>English</option>
                <option>Urdu</option>
                <option>Arabic</option>
            </select>
        </div>
    )
}

export default TopLayer