import React from "react";

interface BoxComponentProps {
  h5text: string;
  ptext: string;
  mtop: string;
  imgname: string;
}

const BoxComponent: React.FC<BoxComponentProps> = ({
  h5text,
  ptext,
  mtop,
  imgname,
}) => {
  return (
    <div
      className={`relative flex flex-col ${mtop} p-6 space-y-6 bg-white rounded-lg md:w-1/3`}
    >
      {/* Image Positioning */}
      <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
        {/* Image Container For Background & Center */}
        <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
          <img src={`${imgname}`} alt="" />
        </div>
      </div>
      <h5 className="pt-6 text-lg font-bold text-center capitalize md:text-left">
        {h5text}
        {/* Brand Recognition */}
      </h5>
      <p className="text-center text-gray-400 md:text-left">
        {ptext}
        {/* Boost your brand recognition with each click. Generic links don’t mean a
        thing. Branded links help instil confidence in your content. */}
      </p>
    </div>
  );
};

export default BoxComponent;
