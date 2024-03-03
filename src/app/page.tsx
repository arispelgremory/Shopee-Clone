'use client'

import { Carousel } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";


const suggestions = [
  {
    icon: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
    title: "Suggestion 1",
    url: "/suggestion-1",
  },
  {
    icon: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
    title: "Suggestion 2",
    url: "/suggestion-2",
  },
  {
    icon: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
    title: "Suggestion 3",
    url: "/suggestion-3",
  },
  {
    icon: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
    title: "Suggestion 4",
    url: "/suggestion-4",
  },
  {
    icon: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
    title: "Suggestion 5",
    url: "/suggestion-5",
  },
  {
    icon: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
    title: "Suggestion 6",
    url: "/suggestion-6",
  },
  {
    icon: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
    title: "Suggestion 7",
    url: "/suggestion-7",
  },
  {
    icon: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
    title: "Suggestion 8",
    url: "/suggestion-8",
  },
  {
    icon: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
    title: "Suggestion 9",
    url: "/suggestion-9",
  },
  {
    icon: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
    title: "Suggestion 10",
    url: "/suggestion-10",
  },
];

export default function Home() {

  const [suggestions, setSuggestions] = useState<SuggestionsProps[]>([]);

  useEffect(() => {
    // Call your API here
    setSuggestions(suggestions);
  }, []);


  return (
    <div className={"custom-container"}>
      <Section1 suggestions={suggestions} />
      <Section2 />
      <Section3 />
    </div>
  );
}

interface SuggestionsProps {
  icon: string;
  title: string;
  url: string;
}


const Section1: React.FC<{
  suggestions: SuggestionsProps[];
}> = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  useEffect(() => {

  }, []);

  return (
    <div className="landing custom-container">
      <div className="flex gap-1 p-1">
        <div className="w-[65%] col-span-3">
          <Carousel afterChange={onChange} autoplay>
            <div className="h-[200px] w-full bg-gray-400">
              <h3>1</h3>
            </div>
            <div className="h-[200px] w-full bg-gray-400">
              <h3>2</h3>
            </div>
            <div className="h-[200px] w-full bg-gray-400">
              <h3>3</h3>
            </div>
            <div className="h-[200px] w-full bg-gray-400">
              <h3>4</h3>
            </div>
          </Carousel>
        </div>
        <div className="flex flex-col w-[35%] gap-1">
          <div className="item col-span-3 h-[98px] bg-gray-400">2</div>
          <div className="item col-span-3 h-[98px] bg-gray-400">3</div>
        </div>
      </div>
      <div className="bg-white flex justify-around max-w-full mt-[10px]">
        {suggestions.map((suggestion, index) => (
          <a
            key={index}
            className="flex flex-col items-center justify-center gap-1 p-1"
            href={suggestion.url}
          >
            <div className="item col-span-3 h-[45px] bg-gray-400 aspect-square rounded-lg mb-2">
              <img
                src={suggestion.icon}
                alt={suggestion.title}
                width={40}
                height={40}
              />
            </div>
            <div className="_2w1zxo">{suggestion.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
}


const Section2: React.FC = () => {

  const item = [
    {
      price: "RM 1.00",
      url: "/item-1",
      image: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
    },
    {
      price: "RM 1.00",
      url: "/item-2",
      image: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
    },
    {
      price: "RM 1.00",
      url: "/item-3",
      image: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
    },
    {
      price: "RM 1.00",
      url: "/item-4",
      image: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
    },
    {
      price: "RM 1.00",
      url: "/item-5",
      image: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
    },
    {
      price: "RM 1.00",
      url: "/item-6",
      image: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
    },
  ]

  return (
    <div className="custom-container mt-[20px]">
      <div className="banner w-full bg-gray-400"></div>
      <div className="p-[15px] pt-0 bg-primary">
        <div className="h-[155px] w-full bg-primary"></div>

        <div className="flex flex-col">
          <div className="flex items-center justify-between mx-[15px] h-[60px]">
            <div className="text-base text-white">CHECKOUT NOW</div>
            <a href="/all" className="text-white text-xs">See More {'>'}</a>
          </div>
          <div className="grid grid-cols-6 overflow-hidden gap-[1px]">
            {item.map((item, index) => (
              <div className="bg-white p-[15px] flex flex-col justify-center items-center">
                <div className="bg-gray-400 w-[162px] aspect-square"></div>
                <div className="mt-[15px] mb-[5px]">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Section3: React.FC = () => {

  const categories = [
    {
        img: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
        title: "Category 1",
        url: "/category-1",
      },
      {
        img: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
        title: "Category 2",
        url: "/category-2",
      },
      {
        img: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
        title: "Category 3",
        url: "/category-3",
      },
      {
        img: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
        title: "Category 4",
        url: "/category-4",
      },
      {
        img: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
        title: "Category 5",
        url: "/category-5",
      },
      {
        img: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
        title: "Category 6",
        url: "/category-6",
      },
      {
        img: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
        title: "Category 7",
        url: "/category-7",
      },
      {
        img: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
        title: "Category 8",
        url: "/category-8",
      },
      {
        img: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
        title: "Category 9",
        url: "/category-9",
      },
      {
        img: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
        title: "Category 10",
        url: "/category-10",
      },
      {
        img: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
        title: "Category 11",
        url: "/category-11",
      },
      {
        img: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
        title: "Category 12",
        url: "/category-12",
      },
      {
        img: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
        title: "Category 13",
        url: "/category-13",
      },
      {
        img: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
        title: "Category 14",
        url: "/category-14",
      },
      {
        img: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
        title: "Category 15",
        url: "/category-15",
      },
      {
        img: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
        title: "Category 16",
        url: "/category-16",
      },
      {
        img: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
        title: "Category 17",
        url: "/category-17",
      },
      {
        img: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
        title: "Category 18",
        url: "/category-18",
      },
      {
        img: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
        title: "Category 19",
        url: "/category-19",
      },
      {
        img: "https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token",
        title: "Category 20",
        url: "/category-20",
      },
  ]

  return (
    <div className="bg-white">
      <div className="my-4">CATEGORIES</div>
      <div className="grid grid-cols-10">
        {
          categories.map((category, index) => (
            <div className="flex flex-col items-center justify-center">
              <div className="bg-primary w-[80px] aspect-square"></div>
              <div>
                {category.title}
              </div>
            </div> 
          ))
        }
      </div>
    </div>
  )
}