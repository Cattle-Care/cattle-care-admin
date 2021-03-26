import React from 'react';
import Sidebar from './Sidebar';
 

const Layout = ({ children }) => {
  return <div className="flex flex-row">
       <div className="w-3/12	">
          <Sidebar />
        </div>
       <div className="w-3/4">{children}</div>
       </div>;
};

export default Layout;