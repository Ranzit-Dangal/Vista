import Image from "next/image";
import Navbar from "../navbar/navbar";

export default function HeroSection() {
  return (
    <div>
      {/* the header section of herosection */}
      <div className="bg-black flex lg:justify-center justify-between items-center p-2 lg:gap-[1100px]">
        <div className="flex gap-1">
          <Image src="/fbicon.png" alt="Facebook" width={20} height={20} />
          <Image src="/instaicon.png" alt="Instagram" width={20} height={20} />
          <Image src="/yticon.png" alt="YouTube" width={20} height={20} />
        </div>
        <div className="flex gap-2">
          {" "}
          <Image src="/whatsapp.png" alt="Facebook" width={16} height={16} />
          <nav className="text-white text-xs font-semibold font-sans">
            9860677777
          </nav>
        </div>
      </div>
      {/* the main section of herosection */}
      <div>
        {/* Background Image */}
        <div className="bg-[url('/mountain.jpg')] grayscale-25 w-full h-screen bg-cover bg-bottom lg:px-20 lg:py-8">
          {/* OVERLAY CONTENT */}
          <Navbar />
          {/* the middle section of herosection */}
          <div className=" flex flex-col justify-center items-center text-center lg:h-[90vh] h-[60vh]">
            <h1 className="text-white font-extrabold lg:text-5xl text-4xl">
              Explore the Himalayas
            </h1>
            {/* Search Bar */}
            <div className="flex items-center gap-2 text-sm rounded-md ring-[1.5px] ring-gray-300 px-2 py-1 md:w-[700px] lg:w-[900px] w-[360px] bg-transparent mt-16">
              <Image src="/search.png" alt="" width={16} height={16} />
              <input
                type="text"
                placeholder="Search your next adventure"
                className="w-[200px] p-2 bg-transparent outline-none"
              />
            </div>
            <button className="mt-10 px-6 py-3 border-2 border-slate-400 rounded-full bg-[#006A4E] text-white hover:bg-green-900 hover:cursor-pointer">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
