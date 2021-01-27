import React from 'react';

const Badge = ({ content }) => (
  <div className="absolute w-6 h-6 rounded-full -top-2.5 -right-2 bg-red-500 border-white border-2">
    <p className="text-center text-white">{content}</p>
  </div>
);

export default Badge