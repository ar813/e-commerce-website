import { IoMdSend } from "react-icons/io";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="max-[1280px]:flex flex-col items-center justify-center max-[1280px]:py-[60px]">

        <div className="grid xl:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 p-[20px] xl:p-[80px] gap-[87px] ">

          <div className="flex flex-col gap-[16px] ">
            <h1 className="font-bold text-[24px] font-Inter">Exclusive</h1>
            <p className="font-[500] text-[20px] font-Poppins">Subscribe</p>
            <p className="font-Poppins text-[16px]">Get 10% off your first order</p>
            <div className="flex justify-around py-[12px] border-[1px] border-white w-[217px]">
              <input type="email"
                id="email"
                placeholder="Enter Your Email"
                className="outline-none bg-black"
              />
              <IoMdSend className="text-[23px] cursor-pointer mr-[16px]" />
            </div>
          </div>

          <div className="flex flex-col gap-[24px] font-Poppins">
            <h1 className="text-[20px] font-[500]">Support</h1>
            <div className="flex flex-col gap-[16px] ">
              <p>111 Bijoy sarani, Dhaka,<br /> DH 1515, Bangladesh.</p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>


          <div className="flex flex-col gap-[24px] font-Poppins ">
            <h1 className="text-[20px] font-[500]">Account</h1>
            <div className="flex flex-col gap-[16px]">
              <p>My Account</p>
              <p>Login / Register</p>
              <p>Cart</p>
              <p>Wishlist</p>
              <p>Shop</p>
            </div>
          </div>

          <div className="flex flex-col gap-[24px] font-Poppins">
            <h1 className="text-[20px] font-[500]">Quick Link</h1>
            <div className="flex flex-col gap-[16px]">
              <p>Privacy Policy</p>
              <p>Terms Of Use</p>
              <p>FAQv</p>
              <p>Contact</p>
            </div>
          </div>

          <div className="font-Poppins grid gap-[24px]">
            <h1 className="text-[20px] font-[500]">Download App</h1>

            <div className="grid gap-[8px]">
              <p className="text-[12px] font-[500]">Save $3 with App New User Only</p>
              <div className="flex gap-[8px]">
                <Image src={"/images/qrcode.svg"} alt="QRCODE" width={100} height={100} className="" />
                <div className="grid gap-[20px]">
                  <Image src={"/images/playstore.svg"} alt="playstore" width={100} height={100} className="w-[110px]" />
                  <Image src={"/images/appstore.svg"} alt="appstore" width={100} height={100} className="w-[110px]" />
                </div>
              </div>
            </div>

            <div className="flex text-[25px] items-center gap-[24px]">
              <FaFacebookF />
              <FiTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>

          </div>

        </div>



      </div>
      <div className="flex justify-center items-center border-t-[1px]">
        <h1 className="my-6"> &copy; Copyright Rimel 2022. All right reserved</h1>
      </div>
    </div>
  )
}
