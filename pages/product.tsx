import Link from "next/link";
import React from "react";

function product() {
  return (
    // Glbal container
    <div className="flex justify-center items-center min-h-screen bg-slate-100">
      {/* Card Container */}
      <div className="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
        {/* Image Div */}
        <div>
          <img
            src="headphone.png"
            className="mx-auto hover:scale-105 duration-200 w-60"
          />
        </div>
        {/* Content */}
        <div className="flex flex-col space-y-6">
          {/* Label and Description Container */}
          <div className="flex flex-col space-y-3 text-center md:text-left mb-4">
            <div>
              <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
                Free Shipping
              </div>
            </div>
            {/* Title */}
            <div className="max-w-sm text-2xl font-medium">
              Razer Kraken Kitty Edt Gaming Headset Quartz
            </div>
            {/* Price Container */}
            <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
              <p className="line-through">$799</p>
              <p className="text-5xl font-bold">$599</p>
              <p className="text-sm font-light text-fray-400">
                This offer is valid until April 3rd or as long as stock lasts!
              </p>
            </div>
            {/* Button Group */}
            <div className="group">
              <button
                className="transition-all duration-150 w-full bg-blue-700 text-white border-b-8 border-b-blue-700 
              rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:border-t-blue-700
              group-hover:shadow-lg"
              >
                <div className="transition-all duration-150 px-8 py-4 bg-blue-500 rounded-lg group-hover:bg-blue-700">
                  Add to cart
                </div>
              </button>
            </div>
            {/* Stock */}
            <div className="flex items-center space-x-3 group">
              <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"></div>
              <div className="text-sm">50+ pcs. in stock</div>
            </div>
            {/* Bottom Buttons Container */}
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
              <button
                className="flex items-center justify-center space-x-3 py-3 px-5 border-2 border-gray-300
    rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150"
              >
                <img src="weight.png" alt="" className="w-8" />
                <span>Add to cart</span>
              </button>
              <button
                className="flex items-center justify-center space-x-3 py-3 px-5 border-2 border-gray-300
    rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150"
              >
                <img src="heart.png" alt="" className="w-8" />
                <span>Add to wishlist</span>
              </button>
            </div>
            <div className="flex font-light">
              <Link className="block py-2" href="/">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default product;
