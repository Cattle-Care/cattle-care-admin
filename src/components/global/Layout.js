import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <>
    <Header />
    <div className="flex flex-row">
      <div className="fixed left-0 w-1/5 ">
        <Sidebar />
      </div>
      <div className="w-4/5">{children}</div>
    </div>
  </>
);

export default Layout;
