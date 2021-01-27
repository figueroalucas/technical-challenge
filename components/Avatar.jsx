import React from 'react';
import Badge from './Badge';

const Avatar = ({
  content,
  notifications,
  rounded = true,
  color = 'blue-500',
}) => {
  const firstTwoLettersOfContent = content.substr(0, 2);

  return (
    <div
      className={`bg-${color} w-12 h-12 ${
        rounded ? 'rounded-full' : 'rounded-lg'
      } flex items-center justify-center relative`}
    >
      <p className="uppercase text-white text-2xl font-bold">
        {firstTwoLettersOfContent}
      </p>
      {notifications && <Badge content={notifications} />}
    </div>
  );
};

export default Avatar;
