import Image from "next/image";

const page = () => {
    return (
        <div className="p-[20px] lg:pl-0 lg:pr-[50px] py-[80px] font-Poppins grid lg:grid-cols-2">
            <div>
                <Image src={"/images/signUpMobile.svg"} width={100} height={100} alt="signUpMobile" className="w-full hidden lg:block"></Image>
            </div>
            <div className="flex justify-center items-center">
                <div className="grid gap-[48px] sm:w-[50%]">
                    <div className="grid gap-[24px]">
                        <h1 className="sm:text-[36px] text-[30px] font-Inter font-[500]">Create an account</h1>
                        <p>Enter your details below</p>
                    </div>
                    <div className="grid gap-[40px]">
                        <input type="text" placeholder="Email or Phone Number" className="border-b-[1px] border-b-[#ccc] pb-[10px] outline-none" />
                        <input type="text" placeholder="Password" className="border-b-[1px] border-b-[#ccc] pb-[10px] outline-none" />
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-[16px]">
                        <button className={`py-[16px] w-full sm:w-[143px] bg-primary text-white font-Poppins font-[500] text-[16px] rounded-[4px]`}>Log In</button>
                        <p className="text-primary">Forget Password?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page