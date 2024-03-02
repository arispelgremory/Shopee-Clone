'use client'

import { Carousel } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";


const suggestions = [
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

