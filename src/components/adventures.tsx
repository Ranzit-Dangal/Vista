"use client";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import { MdLocationOn } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

export default function Adventures() {
  const list = [
    {
      title: "Everest Base Camp Trek",
      img: "/mountain.jpg",
      trek: "8 days",
      country: "Asia, Nepal",
      description: [
        " The Annapurna Circuit is a classic trek in Nepal that takes you through diverse landscapes, from lush subtropical forests to high-altitude deserts, offering stunning views of the Annapurna mountain range.",
      ],
    },
    {
      title: "Annapurna Circuit",
      img: "/mountain.jpg",
      trek: "8 days",
      country: "Asia, Nepal",
      description: [
        " The Annapurna Circuit is a classic trek in Nepal that takes you through diverse landscapes, from lush subtropical forests to high-altitude deserts, offering stunning views of the Annapurna mountain range.",
      ],
    },
    {
      title: "Langtang Valley Trek",
      img: "/mountain.jpg",
      trek: "8 days",
      country: "Asia, Nepal",
      description: [
        " The Annapurna Circuit is a classic trek in Nepal that takes you through diverse landscapes, from lush subtropical forests to high-altitude deserts, offering stunning views of the Annapurna mountain range.",
      ],
    },
    {
      title: "Manaslu Circuit Trek",
      img: "/mountain.jpg",
      trek: "8 days",
      country: "Asia, Nepal",
      description: [
        " The Annapurna Circuit is a classic trek in Nepal that takes you through diverse landscapes, from lush subtropical forests to high-altitude deserts, offering stunning views of the Annapurna mountain range.",
      ],
    },
    // {
    //   title: "Avocado",
    //   img: "/images/fruit-5.jpeg",
    //   price: "$15.70",
    // },
    // {
    //   title: "Lemon 2",
    //   img: "/images/fruit-6.jpeg",
    //   price: "$8.00",
    // },
    // {
    //   title: "Banana",
    //   img: "/images/fruit-7.jpeg",
    //   price: "$7.50",
    // },
    // {
    //   title: "Watermelon",
    //   img: "/images/fruit-8.jpeg",
    //   price: "$12.20",
    // },
  ];
  // Define the variant variable, e.g. "line" or "enclosed"

  return (
    <div>
      <h1 className="font-bold text-3xl font-sans flex flex-1/2 p-10">
        Best Sellers
      </h1>
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-4 px-10 pb-10">
        {list.map((item, index) => (
          <Card
            key={index}
            isPressable
            shadow="sm"
            onPress={() => console.log("item pressed")}
            className="rounded-sm"
          >
            <CardBody className="overflow-visible p-0">
              <Image
                alt={item.title}
                className="w-full object-cover h-[140px]"
                radius="lg"
                shadow="sm"
                src={item.img}
                width="100%"
                height="100%"
              />
              {/* country and days */}
              <div className="flex items-center gap-1 mt-2 justify-between">
                {" "}
                <span className="flex items-center gap-1">
                  {" "}
                  <MdLocationOn className="text-xs" />
                  <b className=" text-xs text-black font-semibold">
                    {item.country}
                  </b>
                </span>
                <span className="items-center flex gap-1">
                  {" "}
                  <SlCalender className="text-xs" />
                  <p className="text-black text-xs font-semibold ">
                    {item.trek}
                  </p>
                </span>
              </div>
            </CardBody>
            <CardFooter className="text-small justify-between flex flex-col items-start">
              <b className="text-2xl text-green-700">{item.title}</b>
              {/* difficulty and altitude */}

              <span className="flex items-center justify-between mt-2">
                <p className="text-xs text-slate-600">
                  Difficulty:
                  <span className="font-bold">&nbsp;Moderate</span>
                </p>
                <p className="text-xs  text-slate-600">
                  Altitude:<span className="font-bold">4130m</span>
                </p>
              </span>
              <hr className="w-full text-slate-300 my-2" />
              <li className="text-left text-sm">{item.description}</li>
              <hr className="w-full text-slate-300 my-2" />
              {/* Price and Reviews */}
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col justify-between items-start">
                  <span className="text-slate-500 text-sm">
                    Price Starting from
                  </span>
                  <span className="text-sm font-bold items-center">$177</span>
                </div>
                <div className="items-center">
                  <span className="text-xs items-start">Reviews</span>
                  {/* <Image
                    src={"/reviewstars.png"}
                    alt=""
                    width={70}
                    height={40}
                  /> */}
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
