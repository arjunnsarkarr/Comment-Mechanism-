import React from "react";

const Tooltip = ({ props }) => {
  const { topic, content, sentiment } = props;

  return (
    <>
      <span
        className={`group cursor-pointer relative  border-gray-400 w-28 text-center ${sentiment}`}
      >
        {content}
        <span className="opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 ml-14 px-3 pointer-events-none">
          {topic}
        </span>
      </span>
    </>
  );
};

export default Tooltip;
