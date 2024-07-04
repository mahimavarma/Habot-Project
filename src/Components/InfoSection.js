import React from 'react';

const FeatureSection = () => {
  return (
    <div className="flex justify-between mt-20 mb-20 p-5">
      <div className="flex-1 pr-5">
        <h1 className="text-3xl mb-4 ml-10 font-bold">
          Ready to dive into <span className="text-[rgb(39,21,85)]">HABOT?</span>
        </h1>
        <p className="mt-8 mb-5 ml-10 max-w-[510px]">
          Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.
        </p>
        <div className="flex items-center">
          <button className="bg-green-700 text-white border-none rounded-md py-2 px-10 cursor-pointer text-lg font-bold flex items-center justify-center pl-12 gap-5 transition duration-300 ml-10 mt-5 hover:bg-green-600">
            Sign up Today!
            <span className="text-xl ml-1">&#10230;</span>
          </button>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-5 mr-3">
        <div className="border-2 border-[rgb(237,156,82)] bg-white py-4 px-5 rounded-md text-center text-lg w-[250px]">Abu Dhabi</div>
        <div className="border-2 border-[rgb(237,156,82)] bg-white py-4 px-5 rounded-md text-center text-lg w-[250px]">Dubai</div>
        <div className="border-2 border-[rgb(237,156,82)] bg-white py-4 px-5 rounded-md text-center text-lg w-[250px]">Sharjah & Ajman</div>
        <div className="border-2 border-[rgb(237,156,82)] bg-white py-4 px-5 rounded-md text-center text-lg w-[250px]">Fujairah</div>
        <div className="border-2 border-[rgb(237,156,82)] bg-white py-4 px-5 rounded-md text-center text-lg w-[250px]">Ras Al Khaimah</div>
        <div className="border-2 border-[rgb(237,156,82)] bg-white py-4 px-5 rounded-md text-center text-lg w-[250px]">Umm Al Quwain</div>
      </div>
    </div>
  );
}

export default FeatureSection;
