import React from "react";
import { ScaleLoader } from "react-spinners";

type props = {
  setOriginal: any;
  original: string;
  buttonStatus: string;
  getShortUrl: any;
  isloading: boolean;
  handleCopy: any;
  copied: boolean;
};
const Shortenurl: React.FC<props> = ({
  setOriginal,
  original,
  buttonStatus,
  getShortUrl,
  isloading,
  handleCopy,
  copied,
}) => {
  return (
    <div className='w-full flex flex-col md:flex-row gap-4'>
      <input
        required
        onChange={(e) => setOriginal(e.target.value)}
        value={original}
        type='text'
        placeholder='Paste the URL to be shortened'
        className='outline-none p-4 w-full bg-zinc-900 rounded-lg border border-zinc-800'
      />

      {buttonStatus == "create" ? (
        <button
          onClick={() => getShortUrl(original)}
          className='flex w-full md:w-1/3 justify-center items-center bg-gradient-to-tl from-[#3ddc84] via-[#00856b] to-[#0b695b] px-4 py-2 rounded-lg  ease-linear duration-100 hover:brightness-90 active:scale-95 text-lg font-semibold'
        >
          {isloading ? (
            <ScaleLoader height={25} width={5} color='#fff' />
          ) : (
            "Shorten URL"
          )}
        </button>
      ) : (
        <button
          onClick={() => handleCopy()}
          className='flex justify-center w-full md:w-1/3 items-center bg-gradient-to-tl from-[#3ddc84] via-[#00856b] to-[#0b695b] px-4 py-2 rounded-lg  ease-linear duration-100 hover:brightness-90 active:scale-95 text-lg font-semibold'
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      )}
    </div>
  );
};

export default Shortenurl;
