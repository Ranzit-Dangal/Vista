import Image from "next/image";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";

export default function FooterSection() {
  return (
    // <div className="bg-[url('/footericon.png')] w-full h-screen bg-contain bg-center bg-no-repeat">
    <div>
      {/* image */}
      <Image
        src="/footericon.png"
        alt=""
        width={1000}
        height={1000}
        className="w-full"
      />
      {/* footer items */}
      <div className="bg-[#006A4E] px-26 pt-10 pb-3">
        <div className="flex justify-between items-center">
          {" "}
          <Image src="/logo-white.png" alt="logo" width={180} height={180} />
          {/* 1st column */}
          <div>
            <h1 className="text-white font-semibold">24/7 Support</h1>
            <h2 className="text-xs text-white">
              Need help? We are at your service
            </h2>
            {/* contact */}
            <div className="py-5 space-y-2">
              {" "}
              <div className="flex items-center">
                <IoIosCall className="text-white" />
                <span className="text-xs text-white">+44 7466 156153</span>
              </div>
              <div className="flex items-center">
                <IoMdMail className="text-white" />
                <span className="text-xs text-white">
                  info@everestvista.com
                </span>
              </div>
              <div className="flex items-center">
                <FaLocationDot className="text-white" />
                <span className="text-xs text-white">United Kingdom (U.K)</span>
              </div>
            </div>
          </div>
          {/* 2nd column */}
          <div className="text-white text-sm space-y-2">
            <h1 className="text-base font-semibold">Company</h1>
            <p>About us</p>
            <p>Meet our Team</p>
            <p>Learning Hub</p>
            <p>Contact Us</p>
            <p>Reviews</p>
          </div>
          {/* 3rd column */}
          <div className="text-white text-sm space-y-2">
            <h1 className="text-base font-semibold">Useful Links</h1>
            <p>Blog</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Refund and Cancellation Policy</p>
            <p>FAQ &apos;s</p>
          </div>
        </div>
        <hr className="w-full text-slate-400 mt-6" />
        {/* under the line */}
        <div className="text-white text-xs flex justify-between items-center py-3">
          <div className="flex items-center gap-2">
            <p>Follow us on:</p>
            <ImFacebook className="size-4" />
            <FaInstagram className="size-4" />
            <IoLogoYoutube className="size-4" />
          </div>
          <div className="flex items-center gap-2">
            <FaRegCopyright className="size-4" />
            <p>2025, All right reserved. Everest Vista</p>
          </div>
        </div>
      </div>
    </div>
  );
}
