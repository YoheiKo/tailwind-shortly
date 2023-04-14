import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ShortenLink from "../components/shortenLink";
import BoxComponent from "../components/boxComponent";

// https://github.com/bradtraversy/tailwind-course-projects
// https://uidesigndaily.com/

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isAlert, setIsAlert] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const onMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const validateEmail = (email: string) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regex.test(email);
    };

    setIsValidEmail(validateEmail(email) || email === "");
  }, [email]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!isValidEmail) {
      setIsAlert(true);
      setTimeout(() => {
        setIsAlert(false);
      }, 3000);
    } else {
      // Perform your desired action here.
    }
  };

  return (
    <div>
      <Head>
        <link rel="shortcut icon" type="image/png" href="favicon-32x32.png" />
        <title>Shortly</title>
      </Head>

      <div>
        {/* Nav Container  */}
        <nav className="relative container mx-auto p-6">
          {/* Flex Container for all items */}
          <div className="flex items-center justify-between">
            {/* Flex Container For Logo/Menu   */}
            <div className="flex items-center space-x-20">
              {/* Logo  */}
              <img src="logo.svg" alt="" />
              {/* Left Menu */}
              <div className="hidden space-x-8 font-bold lg:flex ">
                <Link
                  href="#"
                  className="text-grayishViolet hover:text-veryDarkViolet"
                >
                  Features
                </Link>
                <Link
                  href="#"
                  className="text-grayishViolet hover:text-veryDarkViolet"
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="text-grayishViolet hover:text-veryDarkViolet"
                >
                  Resources
                </Link>
              </div>
            </div>
            {/* Right Buttons Menu  */}
            <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
              <div className="hover:text-veryDarkViolet">Login</div>
              <Link
                href="#"
                className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
              >
                Sign Up
              </Link>
            </div>
            {/* Todo Hamburger Menu */}
            <button
              onClick={onMenuClick}
              id="menu-btn"
              type="button"
              className={
                menuOpen
                  ? "open z-50  block hamburger lg:hidden focus:outline-none"
                  : "close z-50  block hamburger lg:hidden focus:outline-none"
              }
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
          {/* Todo Mobile Menu */}
          <div
            id="menu"
            className={`absolute ${
              !menuOpen ? "hidden" : "flex"
            } p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100 lg:hidden`}
          >
            <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
              <Link href="#" className="w-full text-center">
                Features
              </Link>
              <Link href="#" className="w-full text-center">
                Pricing
              </Link>
              <Link href="#" className="w-full text-center">
                Resources
              </Link>
              <Link
                href="#"
                className="w-full pt-6 border-t border-gray-400 text-center"
              >
                Login
              </Link>
              <Link href="#" className="w-full py-3 text-center rounded-full">
                Features
              </Link>
            </div>
          </div>
        </nav>
        {/* Hero Section */}
        <section id="hero">
          {/* Hero Conttainer */}
          <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
            {/* Content Container */}
            <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
              <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
                More than just shorter links
              </h1>
              <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
                Build your brand's recognition and get detailed insights on how
                your links are performing.
              </p>
              <div className="mx-auto lg:mx-0">
                <Link
                  href=""
                  className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70"
                >
                  Get Started
                </Link>
              </div>
            </div>
            {/* Image */}
            <div className="mb-24 mx-auto md:w-180 lg:w-1/2 lg:mb-0">
              <img src="illustration-working.svg" alt="" />
            </div>
          </div>
        </section>
        {/* Shorten Section */}
        <section id="shorten" className="relative bg-gray-100">
          {/* Shorten Container */}
          <div className="max-w-4xl mx-auto p-6 space-y-6">
            {/* Form */}
            <form
              id="link-form"
              onSubmit={handleSubmit}
              className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
            >
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // className="flex-1 p-3 border-2 rounded-lg placeholder-gray-400 focus:outline-none"
                className={`flex-1 p-3 border-2 ${
                  !isAlert ? "" : "border-red"
                } rounded-lg placeholder-gray-400 focus:outline-none`}
                placeholder="Shorten a link here"
                id="Link-input"
              />

              <button className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2">
                Shorten It!
              </button>
              {/* Error Messages */}
              <div className="absolute left-7 bottom-3 text-red text-sm italic">
                {isAlert && "Please enter a valid email address"}
              </div>
            </form>
            {/* Shortened Links 1*/}
            <ShortenLink
              longLink="https://frontendmentor.io"
              shortLink="https://rel.ink/2z3X"
              bgColor="bg-cyan"
            />
            {/* Shortened Links 2*/}
            <ShortenLink
              longLink="https://twitter.com/frontednmentor"
              shortLink="https://rel.ink/gxOXp9"
              bgColor="bg-darkViolet"
            />
            {/* Shortened Links 3*/}
            <ShortenLink
              longLink="https://linkedin.com/frontendmentor.io"
              shortLink="https://rel.ink/gob3X9"
              bgColor="bg-cyan"
            />
          </div>
        </section>
        {/* Statistics Section */}
        <section id="stats" className="py-24 bg-gray-100">
          {/* Statistics Container */}
          <div className="container mx-auto px-3">
            <h2 className="text-4xl mb-6 font-bold text-center">
              Advanced Statistics
            </h2>
            <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
        </section>
        {/* Feature Box Section */}
        <section id="features" className="pb-32 bg-gray-100">
          {/* <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7"> */}
          {/* Horizontal Line */}
          {/* <div className="hidden absolute top-24 left-16 w-10/12 h-3 bg-cyan md:block"></div> */}
          {/* </div> */}
          <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
            {/* Horizontal Line */}
            <div className="hidden absolute top-24 left-1/2 w-10/12 h-3 bg-cyan transform -translate-x-1/2 md:block"></div>

            {/* Vertical Line */}
            <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>
            {/* Box 1 */}
            <BoxComponent
              h5text={"Brand Recognition"}
              ptext={
                "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
              }
              imgname={"icon-brand-recognition.svg"}
              mtop={""}
            />
            {/* Box 2 */}
            <BoxComponent
              h5text={"Detailed Records"}
              ptext={
                "Gain insights into who is cking your links. Knowing when and where people engage with your content helps inform better decisions"
              }
              imgname={"icon-detailed-records.svg"}
              mtop={"mt-24 md:mt-8"}
            />
            {/* Box 3 */}
            <BoxComponent
              h5text={"Fully Customizable"}
              ptext={
                "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
              }
              imgname={"icon-fully-customizable.svg"}
              mtop={"mt-24 md:mt-16"}
            />
          </div>
        </section>
        {/* CTA Section */}
        <section id="cta" className="py-24 bg-darkViolet">
          <div className="flex flex-col p-2 space-y-6">
            <h5 className="mx-auto space-y-10 text-4xl font-bold text-center text-white">
              Boost your links today
            </h5>
            <button className="px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-cyan hover:bg-cyanLight md:text-base md:py-3 focus:outline-none">
              Get Started
            </button>
          </div>
          <div className="mt-20 space-y-6">
            <h5 className="text-white text-4xl text-center">Author</h5>
            <p className="text-white text-center max-w-lg md:text-left mx-auto ">
              This site was created by{" "}
              <a href="https://github.com/YoheiKo" target="_blank">
                YoheiKo
              </a>{" "}
              using Tailwind and Next.js. The content of this site do not have
              backend features. Full credit goes to{" "}
              <a href="https://www.traversymedia.com/" target="_blank">
                www.traversymedia.com
              </a>
              .
            </p>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="py-16 bg-veryDarkViolet">
          <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
            {/* Logo */}
            <img src="logo.svg" alt="" />
            {/* Menus Container */}
            <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
              {/* Menu One */}
              <div className="flex flex-col items-center w-full md:items-start">
                <div className="mb-5 font-bold text-white capitalize">
                  Features
                </div>
                <div className="flex flex-col items-center space-y-3 md:items-start">
                  <Link
                    href="#"
                    className="capitalize text-grayishViolet hover:text-cyan"
                  >
                    Link Shortening
                  </Link>
                  <Link
                    href="#"
                    className="capitalize text-grayishViolet hover:text-cyan"
                  >
                    Branded Links
                  </Link>
                  <Link
                    href="#"
                    className="capitalize text-grayishViolet hover:text-cyan"
                  >
                    Analytics
                  </Link>
                </div>
              </div>
              {/* Menu Two */}
              <div className="flex flex-col items-center w-full md:items-start">
                <div className="mb-5 font-bold text-white capitalize">
                  Resouces
                </div>
                <div className="flex flex-col items-center space-y-3 md:items-start">
                  <Link
                    href="#"
                    className="capitalize text-grayishViolet hover:text-cyan"
                  >
                    Blog
                  </Link>
                  <Link
                    href="#"
                    className="capitalize text-grayishViolet hover:text-cyan"
                  >
                    Developers
                  </Link>
                  <Link
                    href="#"
                    className="capitalize text-grayishViolet hover:text-cyan"
                  >
                    Support
                  </Link>
                </div>
              </div>
              {/* Menu Three */}
              <div className="flex flex-col items-center w-full md:items-start">
                <div className="mb-5 font-bold text-white capitalize">
                  Company
                </div>
                <div className="flex flex-col items-center space-y-3 md:items-start">
                  <Link
                    href="#"
                    className="capitalize text-grayishViolet hover:text-cyan"
                  >
                    About
                  </Link>
                  <Link
                    href="#"
                    className="capitalize text-grayishViolet hover:text-cyan"
                  >
                    Our Team
                  </Link>
                  <Link
                    href="#"
                    className="capitalize text-grayishViolet hover:text-cyan"
                  >
                    Careers
                  </Link>
                  <Link
                    href="#"
                    className="capitalize text-grayishViolet hover:text-cyan"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            {/* Social Container */}
            <div className="flex space-x-6">
              <Link href="#">
                <img src="icon-facebook.svg" alt="" className="ficon" />
              </Link>
              <Link href="#">
                <img src="icon-twitter.svg" alt="" className="ficon" />
              </Link>
              <Link href="#">
                <img src="icon-pinterest.svg" alt="" className="ficon" />
              </Link>
              <Link href="#">
                <img src="icon-instagram.svg" alt="" className="ficon" />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
