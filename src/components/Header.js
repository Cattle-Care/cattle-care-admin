import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
function Header() {
    return (
        <>

            <div className="mx-auto  max-w-screen-2xl ">
                <div className="flex">

                    <div className="w-1/5 h-16 bg-blue-300">
                        <div className="flex items-center py-2  px-5">
                            <img className="w-10  object-contain" src="78702845.png" alt="" />
                            <span className="px-3 font-medium text-white text-lg">Cattle Care</span>
                        </div>
                    </div>
                    <div className="w-4/5 h-16 bg-blue-300">
                        <div className="flex justify-end items-center ">
                            <ExitToAppIcon className="text-white mr-5 mt-5 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
