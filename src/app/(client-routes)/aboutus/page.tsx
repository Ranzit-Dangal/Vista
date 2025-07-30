import SpeakExperts from "@/components/sections/ExpertSection";
import Image from "next/image";

export default function page() {
  const list = [
    {
      image: "/healthcare.png",
      title: "Safety first",
      description:
        "Uncompromising commitment to trekkers well-being through expert guidance and rigorous protocols.",
    },
    {
      image: "/plantation.png",
      title: "Sustainability",
      description:
        "Active environmental protection (eg.,10 trees planted per booking) and eco-conscious operations.",
    },
    {
      image: "/firecamp.png",
      title: "Beyond the trail",
      description:
        "Curated, off-the-beaten-path experiences that reveal the Himalayas hidden stories and communities.",
    },
    {
      image: "/experts.png",
      title: "Community",
      description:
        "Collabration with local experts, climbers, and social workers to uplift mountain communities.",
    },
  ];
  return (
    <div>
      {/* Background Image */}
      <div className="bg-[url('/team-banner.jpg')] w-full h-[300px] bg-cover bg-bottom">
        {/* top section/ bg overlay */}
        <div className="flex flex-col flex-1 justify-center items-center pt-32 gap-y-4">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
          <p className="text-slate-100 text-sm">
            <b className="hover:underline hover:cursor-pointer hover:text-green-600">
              Home
            </b>
            &gt;&gt;About Us
          </p>
        </div>
      </div>
      {/* Middle Section */}
      <div className="container mx-auto w-full flex p-16 gap-x-10">
        {/* left */}
        <div className="lg:w-2/5 hidden lg:block">
          <Image
            src={"/employees.jpg"}
            alt=""
            width={500}
            height={500}
            className="m-4"
          />
          <Image
            src={"/employees.jpg"}
            alt=""
            width={500}
            height={500}
            className="m-4"
          />
          <Image
            src={"/employees.jpg"}
            alt=""
            width={500}
            height={500}
            className="m-4"
          />
        </div>
        {/* right */}
        <div className="lg:w-3/5">
          <h1 className="text-3xl font-bold">About Everest Vista</h1>
          <p className="text-2xl">Where the Himalayas Come Alive</p>
          <Image
            src={"/line-green.png"}
            alt=""
            width={150}
            height={50}
            className="mt-1"
          />
          <p className="mt-6 text-sm/7">
            At the <b>Everest Vista</b>, we are more than just a trekking
            company - we are the culmination of decades of passion for
            Nepal&apos;s majestic mountains, its vibrant cultures, and delicate
            Himalayan ecosystem. Founded by <b>Mr.Sanjog Karki</b>, a seasoned
            Nepali trekker and cultural enthusiast, our mission is to bridge the
            &quot;Knowledge Gap&quot; in modern trekking experiences, offering
            Western trekkers an authentic, immersive, and transformative journey
            into the heart of the Himalayas.
          </p>
          {/* How we work */}
          <p className="text-2xl font-bold mt-8">How we work</p>
          <Image
            src={"/line-green.png"}
            alt=""
            width={150}
            height={50}
            className="mt-1"
          />
          <p className="mt-6 text-sm/7">
            Your safety, experience and connection with the Himalayas are our
            top priorities. We go beyond standard itineraries, guiding you to
            hidden gems often overlooked by mainstream trekking routes. Our
            expert team-compermising renowned climbers, cultural experts,
            environmentalists, and local guides-ensures that every trek is blend
            of adventure, knowledge, and deep cultural immersion.
          </p>
          {/* Vision */}
          <p className="text-2xl font-bold mt-8">Vision</p>
          <Image
            src={"/line-green.png"}
            alt=""
            width={90}
            height={50}
            className="mt-1"
          />
          <p className="mt-6 text-sm/7">
            To redefine Himalayan trekking by becoming the most trusted and
            transformative adventure company,where every journey goes beyond
            trails to deliver profound cultural insghts, unmatched safety, and a
            lasting positive impact on Nepal&apos;s people and environment.
          </p>
          <p className="text-2xl font-bold mt-7">Values</p>
          <Image
            src={"/line-green.png"}
            alt=""
            width={90}
            height={50}
            className="mt-1"
          />
          {/* Items from the list */}
          <div className="grid lg:grid-cols-2 grid-cols-1 py-2 gap-5 mt-2">
            {list.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-1.5 outline-1 outline-slate-200 shadow-xs"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={70}
                  height={70}
                />
                <h2 className="text-xl font-bold mt-4">{item.title}</h2>
                <p className="text-center mt-2 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SpeakExperts />
    </div>
  );
}
