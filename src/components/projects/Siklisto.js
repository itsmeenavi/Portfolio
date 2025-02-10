// components/projects/Siklisto.js
import React from 'react';
import siklistoImage from '../../assets/siklisto.png';

function Siklisto() {
  return (
    <section className="bg-rich-black text-off-white py-12 px-4">
      <h2 className="text-teal text-center mb-10 text-3xl font-bold">
        Siklisto Project
      </h2>

      <div className="flex flex-col items-center gap-8"> {/* Video Embed Section */}
        <div className="w-full max-w-2xl mx-auto aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/kgc0MPkduNs"
            title="Siklisto Project Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      

       
      </div>
    </section>
  );
}

export default Siklisto;
