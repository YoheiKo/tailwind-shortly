import React from "react";

interface ShortenLinkProps {
  longLink: string;
  shortLink: string;
  bgColor: string;
}

const ShortenLink: React.FC<ShortenLinkProps> = ({
  longLink,
  shortLink,
  bgColor,
}) => {
  return (
    <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
      <p className="font-bold text-center text-veryDarkViolet md:text-left">
        {longLink}
      </p>
      <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
        <div className="font-bold text-cyan">{shortLink}</div>
        <button
          className={`p-2 px-8 text-white ${bgColor} rounded-lg hover:opacity-70 focus:outline-none`}
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default ShortenLink;
