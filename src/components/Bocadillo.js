import React from 'react';
import '../styles/bocadillo.css';

const Bocadillo = ({ children }) => {
  return (
    <div className="bocadillo">
      {children}
    </div>
  );
};

export default Bocadillo;
