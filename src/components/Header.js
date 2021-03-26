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
                            <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" 
                                stroke-width="2"
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
