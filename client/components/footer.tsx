import React from "react";
import Link from "next/link";

import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <div className='flex flex-row justify-center items-center space-x-2 absolute bottom-5 border border-zinc-800 bg-zinc-800/40 shadow-xl shadow-zinc-950/40 p-2 px-3 rounded-lg text-zinc-400 hover:scale-105 hover:text-zinc-50 ease-linear duration-150'>
      <div className=''>
        Built by{" "}
        <Link href={"https://pavitra.vercel.app/"} target="_blank" className=''>
          <span className='font-bold italic text-transparent bg-clip-text bg-gradient-to-tl from-[#3ddc84] via-[#00856b] to-[#0b695b]'>
            @Pavitra
          </span>
        </Link>
      </div>
      <div className='border border-zinc-700/40  h-8'></div>
      <Link href={'https://github.com/Pavitra554/shrinkIt'} target="_blank">
        <SiGithub size={25} />
      </Link>
    </div>
  );
};

export default Footer;
