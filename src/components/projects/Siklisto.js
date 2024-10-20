// components/projects/Siklisto.js
import React from 'react';
import siklistoImage from '../../assets/siklisto.png';


function Siklisto() {
  return (
    <section className="bg-rich-black text-off-white py-12 px-4">
      <h2 className="text-teal text-center mb-10 text-3xl font-bold">
        Siklisto Project
      </h2>
      {/* Add your pictures or videos here */}
      <div className="flex flex-col items-center">
        <img src={siklistoImage} alt="Siklisto Detail" className="mb-4" />
        <p className="text-off-white text-center max-w-prose">
        A Mobile Based Electric Bike Charging Station Locator
        </p>
        {/* Add more images or videos as needed */}
      </div>
    </section>
  );
}

export default Siklisto;
