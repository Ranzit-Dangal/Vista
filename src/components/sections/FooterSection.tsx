import Image from "next/image";

export default function FooterSection() {
  return (
    // <div className="bg-[url('/footericon.png')] w-full h-screen bg-contain bg-center bg-no-repeat">
    <div className="bg-[url('/footericon.png')] bg-[] w-full h-72 bg-contain bg-bottom bg-no-repeat">
      {/* CONTENT */}
      <div className="">
        {/* 1st Column */}
        <div className="p-20">
          <Image src={"/logo-green.png"} alt="" width={120} height={120} />
        </div>
      </div>
    </div>
  );
}
