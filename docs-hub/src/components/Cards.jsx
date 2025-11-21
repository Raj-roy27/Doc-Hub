import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion as Motion } from "motion/react";

const Cards = ({ data, reference }) => {
  return (
    <Motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      className="relative w-50 h-60 bg-zinc-900/90 rounded-4xl text-white px-5 py-8 overflow-hidden "
    >
      <IoDocumentTextOutline />
      <p className="text-xs mt-5 leading-tight font-semibold">{data.des}</p>

      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between mb-3 py-1 px-6">
          <h5 className=" text-xs font-semibold">{data.fileSize}</h5>
          <span className="p-1.5 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose size=".7em" color="#fff" />
            ) : (
              <LuDownload size=".7em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-3 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center `}
          >
            <h3 className="text-sm">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </Motion.div>
  );
};

export default Cards;
