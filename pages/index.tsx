import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// https://github.com/bradtraversy/tailwind-course-projects
// https://uidesigndaily.com/

const Home: NextPage = () => {
  return (
    <div className="">
      <div>
        <div className="flex justify-center items-center h-screen bg-zinc-500">
          <div className="bg-zinc-700 p-2 mx-6 rounded-2xl">
            {/* Flex Container */}
            <div className="flex flex-col md:flex-row md:justify-center md:items-center rounded-l-xl">
              {/* Image */}
              <img
                src="image.jpg"
                alt=""
                className="object-fit rounded-xl h-80 md:h-[460px] md:rounded-l-xl md:rounded-r-none transform duration-200 hover:scale-105 hover:rouded-xl"
              />
              {/* Content */}
              <div className="p-6 md:p-12">
                <h2 className="font-serif text-xl font-medium text-center text-white">
                  Front-end design using Next.js - Tailwind
                </h2>
                <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
                  Made by YoheiKo. The content of this site do not have backend
                  features. <br />
                  Full credit to{" "}
                  <Link href="https://www.traversymedia.com">
                    www.traversymedia.com
                  </Link>
                </p>
                <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-400 rounded-sm placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
                  />
                  <button className="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-300">
                    Submit
                  </button>
                </div>
                <div className="flex flex-col justify-center md:justify-start space-y-4 mt-4 text-white">
                  <h2>Link to design pages :</h2>
                  <Link href="/" className="">
                    Home
                  </Link>
                  <Link href="/imagegallery" className="">
                    Image Gallery
                  </Link>
                  <Link href="/loginmodal" className="">
                    Login Modal
                  </Link>
                  <Link href="/price" className="">
                    Price
                  </Link>
                  <Link href="/product" className="">
                    Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
