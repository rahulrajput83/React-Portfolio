import React, { useState } from "react";

export default function Popover({id, title, src}) {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  return (
    <div className="relative inline-block text-center">
      <img
        data-popover-target={id}
        className="w-10 mx-2 cursor-pointer md:w-16 md:h-16 md:mx-10 md:my-5 my-4 h-10"
        alt={title}
        src={src}
        onMouseEnter={() => setIsPopoverVisible(true)}
        onMouseLeave={() => setIsPopoverVisible(false)}
      />

      {isPopoverVisible && (
        <div
          role="tooltip"
          className="absolute z-10 w-36 text-sm border border-gray-200 rounded-lg bg-second shadow-2xl"
          style={{
            bottom: '90%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          
          <div className="px-3 text-sm pt-2 pb-3 text-white font-medium">
            <span>{title}</span>
          </div>
          <div className="absolute bottom-[-6px] left-1/2 mt-2 transform -translate-x-1/2 w-4 h-4 bg-second border-b border-r border-second rotate-45"></div>
        </div>
      )}
    </div>
  );
}
