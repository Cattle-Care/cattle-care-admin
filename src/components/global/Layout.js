import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <div className="flex flex-row">
    <div className=" w-1/5 ">
      <Sidebar />
    </div>
    <div className="w-4/5">
      <Header />
      {children}
    </div>
  </div>
);

export default Layout;
