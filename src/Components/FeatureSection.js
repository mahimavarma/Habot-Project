import React, { useState } from 'react';
import checkIcon from '../images/tick.png'; 

const InfoSection = () => {
  const [activeTab, setActiveTab] = useState('buyer');

  return (
    <div className="p-5">
      <div className="bg-[rgb(7,47,87)] p-5 flex justify-center items-center rounded-lg h-[500px] relative mx-10">
        <div className="flex-1 flex flex-col items-end mr-5 ml-12">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=Fe2jtJqwygPCg5Bh" 
            title="YouTube video player"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          >
          </iframe>
        </div>
        <div className="flex-1 flex flex-col items-start text-white mt-[-120px]">
          <div className="flex items-center mb-5 ml-12">
            <div
              className={`text-xl cursor-pointer transition-colors duration-300 mr-20 ml-5 border-b-2 inline-block ${activeTab === 'buyer' ? 'text-[rgb(235,113,80)] border-[rgb(235,113,80)] w-[120%]' : 'text-white border-transparent'}`}
              onClick={() => setActiveTab('buyer')}
            >
              Buyer
            </div>
            <div
              className={`text-xl cursor-pointer transition-colors duration-300 mr-20 ml-5 border-b-2 inline-block ${activeTab === 'supplier' ? 'text-[rgb(235,113,80)] border-[rgb(235,113,80)] w-[120%]' : 'text-white border-transparent'}`}
              onClick={() => setActiveTab('supplier')}
            >
              Supplier
            </div>
          </div>
          {activeTab === 'buyer' && (
            <ul className="list-none p-0 m-0 ml-0 mr-2">
              <li className="flex items-center mb-2 text-lg">
                <img src={checkIcon} alt="Check Icon" className="w-5 h-5 bg-green-500 rounded-full p-1 mr-5 ml-5" /> 
                Post your requirements.
              </li>
              <li className="flex items-center mb-2 text-lg">
                <img src={checkIcon} alt="Check Icon" className="w-5 h-5 bg-green-500 rounded-full p-1 mr-5 ml-5" /> 
                Sit back for multiple suppliers to contact you.
              </li>
              <li className="flex items-center mb-2 text-lg">
                <img src={checkIcon} alt="Check Icon" className="w-5 h-5 bg-green-500 rounded-full p-1 mr-5 ml-5" /> 
                Choose among the suppliers based on the ratings and reviews.
              </li>
            </ul>
          )}
          {activeTab === 'supplier' && (
            <ul className="list-none p-0 m-0 ml-0 mr-2">
              <li className="flex items-center mb-2 text-lg">
                <img src={checkIcon} alt="Check Icon" className="w-5 h-5 bg-green-500 rounded-full p-1 mr-5 ml-5" /> 
                Choose wisely while doing this.
              </li>
              <li className="flex items-center mb-2 text-lg">
                <img src={checkIcon} alt="Check Icon" className="w-5 h-5 bg-green-500 rounded-full p-1 mr-5 ml-5" /> 
                Have the suppliers call you.
              </li>
              <li className="flex items-center mb-2 text-lg">
                <img src={checkIcon} alt="Check Icon" className="w-5 h-5 bg-green-500 rounded-full p-1 mr-5 ml-5" /> 
                Get the best suppliers in the world based on their ratings.
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default InfoSection;


