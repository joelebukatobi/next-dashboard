import React from 'react';

export const Label = ({ children, className, htmlFor }) => {
  return (
    <label for={htmlFor} className={className}>
      {children}
    </label>
  );
};
