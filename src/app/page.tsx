'use client'

import { Carousel } from "antd";
import { nanoid } from "nanoid";
import Image from "next/image";
import { title } from "process";
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

  const [landingSuggestions, setLandingSuggestions] = useState<any[]>([
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
  ]);
  const [categories, setCategories] = useState<any[]>([
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
  ]);
  const [suggestions, setSuggestions] = useState<SuggestionsProps[]>([]);
  const [arr, setArr] = useState<any[]>(new Array(48).fill(0));
  const [test, setTest] = useState<any[]>(new Array(6).fill(0));
  const [carouselItems, setcarouselItems] = useState<any[]>(new Array(4).fill(0));
  const [normalItems, setNormalItems] = useState<any[]>(new Array(8).fill(0));
  const [items, setItems] = useState<any[]>(new Array(3).fill(0));


  useEffect(() => {
    // Call your API here
    // setSuggestions(suggestions);
  }, []);

  return (
    <>
      <div className={"custom-container mb-20"}>
        <Landing suggestions={suggestions} carouselItems={carouselItems} />
        <LandingSuggestions landingSuggestions={landingSuggestions} />
        <CategoriesSection categories={categories} />
        <RowProducts title={"SHOCKING SALE"} items={test} />
        <ItemsRow items={items} />
        <ItemListsWithCarousel carouselItems={carouselItems} normalItems={normalItems} />
        <RowProducts title={"TOP PRODUCTS"} items={test}  />
        <DailyDiscover arr={arr} updateArr={setArr}  />
      </div>
      <HomeFooter />
    </>
  );
}

interface SuggestionsProps {
  icon: string;
  title: string;
  url: string;
}


const Landing: React.FC<{
  carouselItems: any[];
  suggestions: SuggestionsProps[];
}> = ({ carouselItems, suggestions }) => {
  useEffect(() => {

  }, []);

  return (
    <div className="landing">
      <div className="flex gap-1 p-1">
        <div className="w-[65%] col-span-3">
          <Carousel autoplay>
            {
              carouselItems.map((item, index) => (
                <div key={index} className="h-[200px] w-full bg-gray-400">
                  {item}
                </div>
              ))
            }
            
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


const LandingSuggestions: React.FC<{
  landingSuggestions: any[];
}> = ({ landingSuggestions }) => {
  return (
    <div className="mt-[20px]">
      <div className="banner w-full bg-gray-400"></div>
      <div className="p-[15px] pt-0 bg-primary">
        <div className="h-[155px] w-full bg-primary"></div>

        <div className="flex flex-col">
          <div className="flex items-center justify-between mx-[15px] h-[60px]">
            <div className="text-base text-white">CHECKOUT NOW</div>
            <a href="/all" className="text-white text-xs">
              See More {">"}
            </a>
          </div>
          <div className="grid grid-cols-6 overflow-hidden gap-[1px]">
            {landingSuggestions.map((item, index) => (
              <div
                key={index}
                className="bg-white p-[15px] flex flex-col justify-center items-center"
              >
                <div className="bg-gray-400 w-[162px] aspect-square"></div>
                <div className="mt-[15px] mb-[5px]">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoriesSection: React.FC<{
  categories: any[];
}> = ({
  categories
}) => {

  return (
    <div className="bg-white">
      <div className="my-4">CATEGORIES</div>
      <div className="grid grid-cols-10">
        {
          categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center justify-center h-[120px]">
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

const RowProducts: React.FC<{ title: string, items: any[] }> = ({ title, items }) => {
  return (
    <>
      <div className="bg-slate-400 mt-[20px]">
        <div className="px-[20px] py-[15px]">{title}</div>
        <div className="grid grid-cols-6">
          {items.map((item, index) => (
            <div key={nanoid()} className="bg-pink-400 flex items-center justify-center h-[250px]">
              Item {index}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const ItemsRow: React.FC<{
  items: any[];
}> = ({
  items
}) => {
  return (
    <div className="mt-[20px]">
      <div className="grid grid-cols-3 gap-3">
        {items.map((item, index) => (
          <div key={nanoid()} className="bg-blue-400 h-[300px]"></div>
        ))}
      </div>
    </div>
  );
}

const ItemListsWithCarousel: React.FC<{
  carouselItems: any[];
  normalItems: any[];
}> = ({
  carouselItems,
  normalItems,
}) => {
  return (
    <div className="mt-[20px]">
      <div className="flex gap-2">
        <div className="w-[35%] col-span-3">
          <div className="h-[400px] w-full bg-gray-400">
            <Carousel autoplay>
              {
                carouselItems.map((item, index) => (
                  <div key={index} className="h-[400px] w-full bg-gray-400">
                    {item}
                  </div>
                ))
              }
            </Carousel>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 w-full">
          {
            normalItems.map((item, index) => (
              <div key={nanoid()} className="bg-green-400 w-full h-full"></div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

const DailyDiscover: React.FC<{
  arr: any[];
  updateArr: React.Dispatch<React.SetStateAction<any[]>>;
}> = ({
  arr,
  updateArr
}) => {

  return (
    <div className="mt-[20px]">
      <div className="text-center bg-white py-3">DAILY DISCOVER</div>
      <div className="grid grid-cols-6 gap-3">
        {arr.map((item) => (
          <div key={nanoid()} className="bg-red-400 h-[300px]"></div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-5">
        <a href="" className="link-button" onClick={() => updateArr}>
          See More
        </a>
      </div>
    </div>
  );
};

const HomeFooter: React.FC = () => {

  const contentSection = [
    {
      title: "SHOPEE MALAYSIA | AN ONLINE SHOPPING PLATFORM WITH GREAT DEALS",
      content: [
        `Shopee Malaysia is a leading online shopping site based in Malaysia
          that brings you great deals, with platforms existing across Asia
          including Singapore, Thailand, Indonesia, Vietnam, Philippines, and
          Taiwan. We offer unbeatable deals featuring an endless range of
          products priced at affordable rates. What’s even better? We enhance
          your experience with Shopee Guarantee, which means your payment is
          held in our system and only released to the seller after you have
          received your purchase in good condition! All because we value you as
          our customer. What are you waiting for? Come aboard and start
          browsing!`,
      ],
    },
    {
      title: "SHOPEE MALAYSIA -- QUALITY PRODUCTS, LOW PRICES",
      content: [
        `Shopee strives to provide you with a great online shopping experience and we know a great experience often includes affordable prices. That’s why you should check out Shopee Malaysia site/app’s daily online Shocking Sale, where we offer you different products at a discounted price, ensuring you get a bang for your buck. We even offer free shipping vouchers on products up to 5kg in West Malaysia, and 1kg in East Malaysia! For those who are brand-loyal, head over to <a href="">Shopee Mall</a> for authentic products at superb prices.`,
        `Want to look your best without burning a hole in your wallet? Check out Style by Shopee for our top picks in fashion. Want to get the best prices for day-to-day items? Browse through our Lowest Price Guaranteed page. If you find the same Lowest Price Guaranteed item being sold at a lower price by a competitor, we will reward you with 120% of the price difference in Shopee Coins! You can also find official online shops for some of Malaysia’s biggest brands here, such as <a href="">Nestle</a>, <a href="">Unilever</a>, <a href="">Mydin</a>, <a href="">Tefal</a>, <a href="">Calvin Klein</a>, and more right here on our platform.`,
        `Want the best deals for food and household items, and enjoy online grocery express delivery to your doorstep? Be sure to visit our <a href="">Shopee Mart!</a> Another quintessential aspect of every purchase is the reliability of your product. Most products listed on Shopee have reviews by previous buyers in Malaysia, allowing you to make informed purchases. Now you can be at ease when shopping with Shopee!`,
      ],
    },
    {
      title: "SHOP FOR VARIETY WITH SHOPEE",
      content: [
        `Everyone loves online shopping for the convenience and the low prices are a bonus! Shopee Malaysia strives to help you get a bang for your buck with multiple sales and promotions happening at any one time. Make sure your wallet is ready for our big sales campaigns, such as  <a href="https://shopee.com.my/m/7-7">7.7  Orange Madness</a>, <a href="https://shopee.com.my/m/99">9.9 Super Shopping Day</a>, <a href="https://shopee.com.my/m/1010-festival">10.10 Brands Festival</a>, <a href="https://shopee.com.my/m/11-11">11.11 Big Sale</a>, and <a href="https://shopee.com.my/m/12-12">12.12 Birthday Sale</a>. We also have massive sales and offer great savings to you during major festivals like <a href="https://shopee.com.my/m/chinese-new-year-sale">Chinese New Year</a> and <a href="https://shopee.com.my/m/raya-sale">Raya</a>! At the same time, check in often because we also have smaller sale periods which are category-specific, such as our <a href="https://shopee.com.my/m/baby-fair">Baby Fair</a> and <a href="https://shopee.com.my/m/shopee-black-friday">Black Friday sales</a>.`,
        `Let’s not forget about the frequently occurring <a href="https://shopee.com.my/m/super-brand-day">Super Brand Day</a>! On these days, specific brands offer amazing deals for their top-selling items, so be sure to keep an eye out to see if your favourite brand is featuring. Of course, there are always different kinds of smaller promotions happening every day, so you really will benefit if you constantly check your Shopee app or the website to ensure you are not missing any mind-blowing offers! Want even more savings? Then apply for the <a href="https://shopee.com.my/m/maybank-shopee-credit-card">Maybank Shopee Credit Card</a> so you can earn Shopee coins when spending on Shopee purchases, dining, entertainment, and contactless transactions. More Shopee coins mean more discounts during your shopping sprees on our platform!`,
      ],
    },
    {
      title: "GET FREE SHIPPING ON SHOPEE",
      content: [
        `Enjoy Free Shipping on Shopee! For buyers, shop to your heart’s content and enjoy lower prices for your purchases. If you buy enough from the same seller, you’ll get your items delivered for free! For sellers, get your shipping fees reimbursed - selling can’t get any easier on Shopee Malaysia.`,
      ],
    },
  ];

  return (
    <div className="w-screen mt-[20px] text-[rgba(0,0,0,.54)] font-bold orange-border-top">
      <div className="custom-container mt-14 pb-[1.875rem] gray-border-bottom">
        {contentSection.map((section, i) => (
          <div key={i} className="mb-[1.875rem]">
            <h2 className="m-0 text-sm font-bold leading-[1.7]">
              {section.title}
            </h2>
            <div>
              {section.content?.map((content) => (
                <p
                  key={nanoid()}
                  className="mt-3 font-normal leading-[1.4] text-xs text-[rgba(0,0,0, .54)] [&>a]:underline"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}