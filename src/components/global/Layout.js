import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <div className="flex flex-row">
    <div className="w-3/12	">
      <Sidebar />
    </div>
    <div className="w-3/4">
      <Header />
      {children}
    </div>
  </div>
);

export default Layout;
