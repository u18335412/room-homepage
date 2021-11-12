import Head from "next/head";
import Link from "next/link";
import arrowImage from "../images/icon-arrow.svg";
import hero1 from "../images/desktop-image-hero-1.jpg";
import hero2 from "../images/desktop-image-hero-2.jpg";
import hero3 from "../images/desktop-image-hero-3.jpg";

import hamburgerButton from "../images/icon-hamburger.svg";
import rightChevron from "../images/icon-angle-right.svg";
import leftChevron from "../images/icon-angle-left.svg";
import col1Image from "../images/image-about-dark.jpg";
import col3Image from "../images/image-about-light.jpg";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = (props) => {
  return (
    <>
      <header className=" flex flex-col lg:flex-row relative">
        <div className=" w-full lg:w-3/5 relative bg-red-400">
          <div className=" md:invisible flex w-32  h-14 bottom-0 right-0 absolute cursor-pointer">
            <div
              onClick={props.prev}
              className="bg-black hover:bg-veryDarkGray w-1/2 flex items-center justify-center transition-all"
            >
              <img src={leftChevron.src}></img>
            </div>
            <div
              onClick={props.next}
              className=" bg-black hover:bg-veryDarkGray w-1/2 flex items-center justify-center transition-all"
            >
              <img src={rightChevron.src}></img>
            </div>
          </div>
          <img src={props.heroImage.image.src} className=" w-full h-full"></img>
        </div>
        <div className=" xl:px-24 2xl:pt-40 xl:pt-28 pt-16 px-7 md:w-screen lg:w-2/5 relative">
          <p className=" 2xl:text-5xl  xl:text-4xl text-3xl md:text-base font-semibold">
            {props.heroImage.heading}
          </p>
          <p className=" mt-7 xl:mt-14 text-xs tracking-tighter text-darkGray md:text-xs 2xl:text-lg">
            {props.heroImage.text}
          </p>
          <div className="mt-10 lg:mt-10 flex items-center gap-20 hover:text-darkGray cursor-pointer transition-all">
            <div className=" uppercase flex space-x-4">
              <span>s</span>
              <span>h</span>
              <span>o</span>
              <span>p</span>
              <span className=" pl-4">n</span>
              <span>o</span>
              <span>w</span>
            </div>
            <div>
              <img src={arrowImage.src}></img>
            </div>
          </div>
          <div className="  invisible md:visible flex xl:w-[13.5rem] w-32 xl:h-28 h-14 lg:bottom-0 right-0 md:pt-7 md:mb-10 lg:mb-0 lg:absolute lg:left-0  cursor-pointer lg:h-32 lg:w-52">
            <div
              onClick={props.prev}
              className="md:py-5 lg:py-0  bg-black hover:bg-veryDarkGray w-1/2 flex items-center justify-center transition-all"
            >
              <img src={leftChevron.src}></img>
            </div>
            <div
              onClick={props.next}
              className=" md:py-5 lg:py-0 bg-black hover:bg-veryDarkGray w-1/2 flex items-center justify-center transition-all"
            >
              <img src={rightChevron.src}></img>
            </div>
          </div>
        </div>
      </header>
      <div className="absolute top-0 md:pl-20 md:left-0 md:pt-5 text-white ">
        <span className=" md:invisible absolute md:relative pt-5 px-6">
          <img src={hamburgerButton.src}></img>
        </span>
        <span className=" md:relative md:-left-11 absolute text-center w-screen mt-4">
          <Link href="/">room</Link>
        </span>
        <span className=" pl-14 space-x-5 invisible md:visible">
          <Link href="#">home</Link>
          <Link href="#">shop</Link>
          <Link href="#">about</Link>
          <Link href="#">contact</Link>
        </span>
      </div>
    </>
  );
};

export default function Home() {
  const heroImages = [
    {
      image: hero1,
      heading: "Discover innovative ways to decorate",
      text: `We provide unmatched quality, comfort, and style for property owners
  across the country. Our experts combine form and funtion in bringing
  your vission to life. Create a room in your own style with our
  collection and make your property a reflection of you and what you
  love.`,
    },
    {
      image: hero2,
      heading: "We are available all across the globe",
      text: ` With stores all over the world, it's easy for you to find furniture
      for your home or place of business. Locally, we're in most major
      cities throughout the country. Find the branch nearest you using our
      store locator. Any questions? Don't hesitate to contact us today.`,
    },
    {
      image: hero3,
      heading: "Manufactured with the best materials",
      text: `Our moden furniture store provide a high level of quality. Our
    company has invested in advanced technology to ensure that every
    product is made as perfect and as consistent as possible. With three
    decades of experience in this industry, we understand what customers
    want for their home and office.`,
    },
  ];
  const [index, setIndex] = useState(0);

  const nextHero = () => {
    index === 2 ? setIndex(0) : setIndex((index) => index + 1);
  };

  const prevHero = () => {
    index === 0 ? setIndex(2) : setIndex((index) => index + -1);
  };

  return (
    <div className=" h-full min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar
        next={nextHero}
        prev={prevHero}
        heroImage={heroImages[index]}
      ></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="">
          <img
            src={col1Image.src}
            className=" h-full object-cover w-full"
          ></img>
        </div>
        <div className=" px-10 py-16  col-span-2">
          <p className="font-bold tracking-widest uppercase">
            About our furniture
          </p>
          <p className=" text-xs mt-5  text-darkGray tracking-widest leading-relaxed">
            Our multifunctional collection blends design and function to suite
            your individual taske. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need. from traditional to contemporary
            style or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <div className=" bg-gray-600">
          <img
            src={col3Image.src}
            className=" h-full object-cover w-full"
          ></img>
        </div>
      </div>
    </div>
  );
}
