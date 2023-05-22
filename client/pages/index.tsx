"use client";
import React from "react";
import Image from "next/image";

//Components
import Header from "@/components/header";
import Shortenurl from "@/components/shortenurl";
import Checkurlstatus from "@/components/checkurlstatus";

//Packages
import axios from "axios";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import Statusdata from "@/components/statusdata";
import Footer from "@/components/footer";

export default function Home() {
  //Data
  const [data, setData]: any = React.useState();
  const [statusData, setStatusData]: any = React.useState();

  //create
  const [original, setOriginal] = React.useState("");
  const [copied, setCopied] = React.useState(false);
  const [isloading, setIsloading] = React.useState(false);
  const [buttonStatus, setButtonStatus] = React.useState("create");

  //status
  const [checkurl, setCheckurl] = React.useState("");
  const [checkload, setCheckload] = React.useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  //Spot light effect
  const spotlightSize = "250px";
  const spotlightColor = "rgba(61, 220, 132, 0.1)";

  const getShortUrl = async (e: string) => {
    setIsloading(true);
    try {
      const res = await axios.post(`/api/shortUrl`, {
        originalUrl: e,
      });
      setData(res.data);
    } catch (e) {
      toast.error('Something went wrong:(');
      setIsloading(false);
    }
  };
  const getStatus = async (e: string) => {
    setCheckload(true);
    try {
      const res = await axios.get(
        `/api/checkstatus/${checkurl.substring(35, checkurl.length)}`
      );
      setStatusData(res.data);
    } catch (e) {
      toast.error('Something went wrong:(');
      setCheckload(false);
    }
  };

  const handleCopy = () => {
    const textToCopy = original;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true), toast.success("Copied!");
      })
      .catch((error) => console.error("Failed to copy: ", error));
    setTimeout(() => {
      setButtonStatus("create");
      setOriginal("");
    }, 2000);
  };

  React.useEffect(() => {
    setData(data);
    if (data && data.shortUrl) {
      setOriginal(process.env.NEXT_PUBLIC_SHORT_URL + data.shortUrl);
      setIsloading(false);
      setButtonStatus("copy");
      toast.success("Short URL generated!");
    }
    if (data && data.status !== "Live") {
      setOriginal("");
      toast.error(data.status);
      setIsloading(false);
    }
  }, [data]);

  React.useEffect(() => {
    setStatusData(statusData);
    if (statusData && (statusData.clicks || statusData.status === "Live") ) {
      setCheckload(false);
      toast.success("Status Loaded!");
    }
    if (statusData && statusData.status !== "Live") {
      setCheckload(false);
      toast.error(statusData.status);
    }
  }, [statusData]);

  return (
    <main
      className={`h-screen w-screen p-4 bg-zinc-900 flex gap-8 flex-col justify-center items-center relative`}
    >
      <Toaster
        position='top-center'
        reverseOrder={false}
        toastOptions={{
          style: { backgroundColor: "rgb(39,39,42) ", color: "#fff" },
          duration: 3000,
        }}
      />
      <Header />
      <div
        onMouseMove={({ clientX, clientY, currentTarget }) => {
          let { left, top } = currentTarget.getBoundingClientRect();
          mouseX.set(clientX - left);
          mouseY.set(clientY - top);
        }}
        className='max-w-2xl mb-16 flex flex-col gap-4  w-full relative text-zinc-200 rounded-lg border group border-zinc-800 bg-zinc-800/40 shadow-xl shadow-zinc-950/40 p-4  overflow-hidden'
      >
        <motion.div
          className='absolute transition duration-500 ease-out -inset-px pointer-events-none opacity-0 group-hover:opacity-100'
          style={{
            background: useMotionTemplate`radial-gradient(${spotlightSize} circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`,
          }}
        ></motion.div>
        <div className='text-zinc-300 text-lg text-center '>
          ShrinkIt allows to create a shortened link making it easy to share
        </div>
        <Shortenurl
          setOriginal={setOriginal}
          original={original}
          buttonStatus={buttonStatus}
          getShortUrl={getShortUrl}
          isloading={isloading}
          handleCopy={handleCopy}
          copied={copied}
        />
        <Checkurlstatus
          setCheckurl={setCheckurl}
          checkurl={checkurl}
          getStatus={getStatus}
          checkload={checkload}
        />
        <Statusdata
          statusData={statusData}
        />
      </div>
      <Footer/>
    </main>
  );
}

//
