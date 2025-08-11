import Image from "next/image";
import Trips from "../trips";
import COllections from "../collections";
import Company from "../company";
import { IoLogInOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div>
      <div>
        {" "}
        {/* Navbar */}
        <nav className="flex w-full p-4 lg:px-10 items-center lg:justify-center justify-between lg:gap-x-80 rounded-xs shadow-md bg-gradient-to-b from-gray-700/80 to-transparent">
          {/* navbar logo */}
          <div className="">
            {" "}
            <Image
              src={"/logo-white.png"}
              alt="logowhite"
              width={70}
              height={60}
            />
          </div>

          {/* nav items */}
          <section className="hidden md:flex gap-2">
            <Trips />
            <COllections />
            <button className="text-white font-semibold text-sm hover:text-green-500 ">
              Learning Hubs
            </button>
            <Company />

            <button className="text-white font-semibold text-sm hover:text-green-500 ">
              Contact
            </button>
          </section>

          {/* nav login button */}
          <div className="items-center flex gap-1">
            <IoLogInOutline className="size-5 text-green-500 " />
            <button className="font-semibold text-sm text-green-400 items-center">
              Login
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
