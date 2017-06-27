import React from 'react';

export const listComponent = ({ children }) => {
  console.log('listSort.children', children);
  return (
    <ul>
      {children}
    </ul>
  );
};
