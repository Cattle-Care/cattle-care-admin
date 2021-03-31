import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
  return <div className="flex flex-row">
       <div className="w-3/12	">
        
          <Sidebar />
        </div>
       <div className="w-3/4">
       <Header/>
         {children}</div>
       </div>;
};

export default Layout;