import React from "react";

type props = {
    statusData:any
}

const Statusdata:React.FC<props> = ({statusData}) => {
  return (
    <div className='w-full flex flex-col md:flex-row gap-4'>
      <div className='flex flex-row justify-between items-center p-4 w-full h-16 bg-zinc-900 rounded-lg border border-zinc-800'>
        <div>Status:</div>
        <div className='text-[#3ddc84]'>
          {statusData && statusData.status ? statusData.status : "~"}
        </div>
      </div>
      <div className='flex flex-row justify-between items-center p-4 w-full h-16 bg-zinc-900 rounded-lg border border-zinc-800'>
        <div>Clicks:</div>
        <div className='text-[#3ddc84]'>
          {statusData && statusData.clicks ? statusData.clicks : "~"}
        </div>
      </div>
    </div>
  );
};

export default Statusdata;
