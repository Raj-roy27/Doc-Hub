import React from "react";

const Bg = () => {
  return (
    <div className=" fixed z-10 w-full h-full">
      <div className="absolute top-10 w-full flex justify-center text-zinc-700 font-semibold text-lg">
        Doc-Hub by Raj Roy
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  text-[14vw] text-zinc-950 leading-none tracking-tight font-semibold">
        Docs<span>.</span>
      </h1>
    </div>
  );
};

export default Bg;
