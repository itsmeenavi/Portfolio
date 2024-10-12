// components/TimelineItem.js
import React from 'react';
import { FaSchool } from 'react-icons/fa';

function TimelineItem({ item }) {
  return (
    <div className="mb-10 ml-8">
      <div className="absolute -left-4 mt-1.5 text-teal">
        <FaSchool size={24} />
      </div>
      <p className="text-sm text-off-white">{item.years}</p>
      <h3 className="text-lg font-semibold text-teal">
        {item.institution}
      </h3>
      <p className="text-base text-off-white">{item.degree}</p>
    </div>
  );
}

export default TimelineItem;
