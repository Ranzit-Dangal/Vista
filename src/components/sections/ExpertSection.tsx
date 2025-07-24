import Image from "next/image";

export default function SpeakExperts() {
  return (
    <div className="bg-[url('/worldmp.png')] w-full h-screen bg-center bg-no-repeat content-center ">
      <div className="">
        {/* TITLE */}
        <div className="flex flex-1 flex-col justify-center items-center p-5">
          <h1 className="font-bold text-3xl mb-2">Speak To An Expert</h1>
          <Image
            src={"/line-green.png"}
            alt=""
            width={100}
            height={20}
            className="ml-48 mb-4"
          />
          <p className="text-center">
            If you have any questions or concerns while booking a trip with us,
            please dont hesitate to reach out to
          </p>
          <p>our experts from various countries for assistance.</p>
        </div>
        {/* Buttons */}
        <div className="flex flex-1 justify-center items-center gap-4">
          <button className="px-5 py-2 bg-[#006A4E] rounded-sm text-white hover:bg-green-700">
            Book a chat
          </button>
          <button className="px-5 py-2 bg-white rounded-sm text-[#006A4E] outline-[#006A4E] outline-1 hover:bg-[#006A4E] hover:text-white hover:outline-0">
            Meet the Team
          </button>
        </div>
      </div>
    </div>
  );
}
