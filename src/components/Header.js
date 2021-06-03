import React from 'react';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div style={{ textAlign: 'right', paddingRight: '8%' }}>
      <GoogleAuth />
    </div>
  );
};

export default Header;
