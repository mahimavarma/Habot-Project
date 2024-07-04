import React from 'react';

const StripSection = () => {
  return (
    <div className="bg-[rgb(232,251,255)] h-[200px] py-2 px-5 mt-20 flex justify-between items-center w-full">
      <div className="flex items-center">
        <span className="font-bold text-3xl ml-24">Let Suppliers</span>
        <span className="font-bold text-3xl ml-1 mt-1 border-b-2 border-[rgb(235,113,80)]">Find You</span>
      </div>
      <button className="bg-[rgb(235,113,80)] text-white font-bold w-[200px] border-none rounded-md py-3 px-5 text-base cursor-pointer transition-colors duration-300 hover:bg-[#ff5722] mr-24 ">
        Get Verified
      </button>
    </div>
  );
}

export default StripSection;
