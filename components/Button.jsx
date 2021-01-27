import React from 'react';

const Button = ({ children, outlined, color = 'blue-500', className, ...rest }) => {
  return (
    <button
      className={`${outlined ? `border border-${color} text-${color}` : `bg-${color} text-white`} py-3 px-6 rounded-lg ${className}`}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
