import React from "react";
import Link from "next/link";

function price() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800">
        <div className="flex flex-col my-6 space-y-6 md:space-x-6 md:space-y-0 md:flex-row md:my-0">
          {/* Col1 */}
          <div className="rounded-xl bg-slate-700 text-white">
            {/* Uppder Container */}
            <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
              <div className="text-center uppercase">Basic</div>
              <h2 className="mt-10 font-serif text-5xl text-center">100GB</h2>
              <h3 className="mt-2 text-center">$1.99/Month</h3>
              <div className="flex justify-center">
                <Link
                  href=""
                  className="px-10 py-3 my-6 inline-block text-center border border-violet-600 rounded-lg duration-200 hover:bg-violet-800 hover:border-violet-800"
                >
                  Purchase
                </Link>
                {/* Border */}
              </div>
            </div>
            {/* Border */}
            <div className="border-t border-slate-400 mx-3"></div>
            {/* Lower Contaner */}
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              {/* List Container */}
              <div className="flex flex-col space-y-2">
                {/* !st list item */}
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span className="text-sm tracking-wide ml-1">
                    100 GB of storage
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span className="text-sm tracking-wide ml-1">
                    Option to add members
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span className="text-sm tracking-wide ml-1">
                    Extra member benefits
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Col2 */}
          <div className="rounded-xl bg-violet-600 text-white">
            {/* Uppder Container */}
            <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
              <div className="text-center uppercase">Standard</div>
              <h2 className="mt-10 font-serif text-5xl text-center">200GB</h2>
              <h3 className="mt-2 text-center">$3.99/Month</h3>
              <div className="flex justify-center">
                <Link
                  href=""
                  className="px-10 py-3 my-6 inline-block text-center border border-violet-600 rounded-lg duration-200 hover:bg-violet-800 hover:border-violet-800 bg-violet-600"
                >
                  Purchase
                </Link>
                {/* Border */}
              </div>
            </div>
            {/* Border */}
            <div className="border-t border-slate-400 mx-3"></div>
            {/* Lower Contaner */}
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              {/* List Container */}
              <div className="flex flex-col space-y-2">
                {/* !st list item */}
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span className="text-sm tracking-wide ml-1">
                    200 GB of storage
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span className="text-sm tracking-wide ml-1">
                    Option to add members
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span className="text-sm tracking-wide ml-1">
                    Extra member benefits
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Col3 */}
          <div className="rounded-xl bg-slate-700 text-white">
            {/* Uppder Container */}
            <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
              <div className="text-center uppercase">Premium</div>
              <h2 className="mt-10 font-serif text-5xl text-center">2TB</h2>
              <h3 className="mt-2 text-center">$8.99/Month</h3>
              <div className="flex justify-center">
                <Link
                  href=""
                  className="px-10 py-3 my-6 inline-block text-center border border-violet-600 rounded-lg duration-200 hover:bg-violet-800 hover:border-violet-800"
                >
                  Purchase
                </Link>
                {/* Border */}
              </div>
            </div>
            {/* Border */}
            <div className="border-t border-slate-400 mx-3"></div>
            {/* Lower Contaner */}
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              {/* List Container */}
              <div className="flex flex-col space-y-2">
                {/* !st list item */}
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span className="text-sm tracking-wide ml-1">
                    2 TB of storage
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span className="text-sm tracking-wide ml-1">
                    Option to add members
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span className="text-sm tracking-wide ml-1">
                    Extra member benefits
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-light text-white mt-4">
          <Link className="block py-2" href="/">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default price;
