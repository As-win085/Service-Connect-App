import React from 'react';


const CourseCard = ({ id ,img, name, title, location,time }) => {
  return (
    <div
      key={id}
      className="flex items-center justify-between bg-gray-500 text-white rounded-2xl p-3 shadow-md"
    >
      <div className="flex items-center gap-3">
        <img
          src={img}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-sm">{title}</p>
          <p className="text-xs opacity-80">{name}</p>
        </div>
      </div>
      <div className="text-right text-xs">
        <p>{time}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default CourseCard;