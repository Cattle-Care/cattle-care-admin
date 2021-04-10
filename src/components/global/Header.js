import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header() {
  return (
    <>
      <div className="sticky top-0 z-10">
        <div className="flex">
          <div className="w-full h-20 bg-blue-900">
            <div className="flex justify-end items-center ">
              <ExitToAppIcon className="text-white mr-5 my-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
