import React from "react";
import { ScaleLoader } from "react-spinners";

type props = {
  setCheckurl: any;
  checkurl: string;
  getStatus: any;
  checkload: boolean;
};

const Checkurlstatus:React.FC<props> = ({setCheckurl,checkurl,getStatus,checkload}) => {
  return (
    <div className='w-full flex flex-col md:flex-row gap-4'>
      <input
        required
        onChange={(e) => setCheckurl(e.target.value)}
        value={checkurl}
        type='text'
        placeholder='Enter ShrinkIt URL'
        className='outline-none p-4 w-full bg-zinc-900 rounded-lg border border-zinc-800'
      />
      <button
        onClick={() => getStatus(checkurl)}
        className='flex w-full md:w-1/3 justify-center items-center bg-gradient-to-tl from-[#3ddc84] via-[#00856b] to-[#0b695b] px-4 py-2 rounded-lg  ease-linear duration-100 hover:brightness-90 active:scale-95 text-lg font-semibold'
      >
        {checkload ? (
          <ScaleLoader height={25} width={5} color='#fff' />
        ) : (
          "Check Status"
        )}
      </button>
    </div>
  );
};

export default Checkurlstatus;
