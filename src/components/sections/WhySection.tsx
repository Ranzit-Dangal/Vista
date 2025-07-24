import Image from "next/image";

export default function WhySection() {
  const list = [
    {
      image: "/experts.png",
      title: "Guided by Experts",
      description:
        "We are the best in the business of trekking and mountaineering. Our team is experienced and dedicated to providing you with the best adventure experience possible.",
    },
    {
      image: "/healthcare.png",
      title: "High Standard of Safety",
      description:
        "We are the best in the business of trekking and mountaineering. Our team is experienced and dedicated to providing you with the best adventure experience possible.",
    },
    {
      image: "/plantation.png",
      title: "Adventure with Purpose",
      description:
        "We are the best in the business of trekking and mountaineering. Our team is experienced and dedicated to providing you with the best adventure experience possible.",
    },
    {
      image: "/topnotch.png",
      title: "Top-Notch Service",
      description:
        "We are the best in the business of trekking and mountaineering. Our team is experienced and dedicated to providing you with the best adventure experience possible.",
    },
    {
      image: "/firecamp.png",
      title: "Evening Storytelling Circles",
      description:
        "We are the best in the business of trekking and mountaineering. Our team is experienced and dedicated to providing you with the best adventure experience possible.",
    },
    {
      image: "/healing.png",
      title: "Healing Experience Included",
      description:
        "We are the best in the business of trekking and mountaineering. Our team is experienced and dedicated to providing you with the best adventure experience possible.",
    },
    {
      image: "/compass.png",
      title: "Deep Cultural Immersion",
      description:
        "We are the best in the business of trekking and mountaineering. Our team is experienced and dedicated to providing you with the best adventure experience possible.",
    },
    {
      image: "/peak.png",
      title: "More Than Just a Trek",
      description:
        "We are the best in the business of trekking and mountaineering. Our team is experienced and dedicated to providing you with the best adventure experience possible.",
    },
  ];
  return (
    <div className="bg-[url('/darkmountain.jpg')] w-full h-screen bg-cover bg-center text-white px-10 py-8">
      {/* Heading */}
      <div className="p-4 justify-center items-center flex flex-col gap-4">
        <h1 className="text-white text-3xl font-semibold">
          Why Everest Vista?
        </h1>
        <Image src={"/line-white.png"} alt="" width={140} height={30} />
      </div>
      {/* Content */}
      <div className="grid lg:grid-cols-4 grid-cols-8 py-2 px-16 gap-4">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4"
          >
            <Image src={item.image} alt={item.title} width={70} height={70} />
            <h2 className="text-xl font-bold mt-4">{item.title}</h2>
            <p className="text-center mt-2 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
      {/* Button */}
      <div className="justify-center items-center w-full flex flex-col pt-10">
        <button className="bg-[#006A4E] px-6 py-3 rounded-md hover:bg-green-700">
          <h1 className="text-sm">Find out more</h1>
        </button>
      </div>
    </div>
  );
}
