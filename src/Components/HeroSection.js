import React from 'react';
import photo from '../images/city.jpg'; 
import searchIcon from '../images/breifcase.jpg';
import locationIcon from '../images/location.png'; 

const HeroSection = () => {
  return (
    <div className="relative w-full h-[65vh] bg-cover bg-center" style={{ backgroundImage: `url(${photo})` }}>
      <div className="absolute inset-0 bg-[rgba(17,59,95,0.80)] flex flex-col justify-center items-center text-center">
        <div className="text-white max-w-[800px] p-5">
          <h1 className="text-5xl font-bold">Are You a Supplier?</h1>
          <p className="text-5xl mb-8">Explore Matching Opportunities.</p>
          <div className="flex justify-center items-center mb-5">
            <div className="flex items-center bg-white rounded py-3 px-4 mx-2 w-[500px]">
              <img src={searchIcon} alt="Search Icon" className="w-4 mr-2" /> 
              <input type="text" placeholder="Search your required service here" className="w-full border-none outline-none pl-2" /> 
            </div>
            <div className="flex items-center bg-white rounded py-3 px-4 mx-2 w-[500px]">
              <img src={locationIcon} alt="Location Icon" className="w-3 mr-2" /> 
              <input type="text" placeholder="Search your desired location here" className="w-full border-none outline-none pl-2" /> 
            </div>
            <button className="bg-[#00732f] text-white py-3 px-6 ml-2 rounded-lg font-bold hover:bg-[#005f23]">Search</button>
          </div>
          <div className="mt-5">
            <span className="font-bold mr-2">Are you a buyer?</span>
            <a href="#" className="text-white underline cursor-pointer">Click here if you are looking to post a requirement</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
