import React from "react";
import Cards from "./Cards";

const Forground = () => {
  const ref = React.useRef(null);

  const data = [
    {
      des: "This is the Documents of my Project Doc Hub, Just read It and explore more.",
      fileSize: "0.9 MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now...", tagColor: "green" },
    },
    {
      des: "This is the Documents of my Project Doc Hub, Just read It and explore more.",
      fileSize: "3.2 MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Uploading...", tagColor: "blue" },
    },
    {
      des: "I want to learn backend development with Node.js and MongoDB plus SQL databases",
      fileSize: "12 MB",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now...", tagColor: "green" },
    },
  ];
  return (
    <div
      ref={ref}
      className=" fixed z-20 top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5 shrink-0 "
    >
      {data.map((item, index) => (
        <Cards data={item} key={index} reference={ref} />
      ))}
    </div>
  );
};

export default Forground;
