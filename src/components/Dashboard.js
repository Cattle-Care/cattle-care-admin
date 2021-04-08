import React from 'react';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import GitHubIcon from '@material-ui/icons/GitHub';

function Dashboard() {
  return (
    <>
      <section className="text-gray-600  py-5 body-font">
        <div className="mx-auto  max-w-screen-xl px-4">
          <div className="flex flex-wrap -m-4 ">
            <div className="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2   w-full">
              <div className="border-2 border-gray-200 px-10 py-2 rounded-lg shadow-lg ">
                <div className=" py-5     flex items-center">
                  <div className="bg-gray-600  rounded-full h-12 w-12 flex justify-center items-center ">
                    <KeyboardIcon className="text-white " />
                  </div>
                  <span className="ml-2 text-lg font-semibold">Orders</span>
                </div>
                <div className=" flex items-center justify-center ">
                  <ArrowDownwardIcon className="text-red-400 " />
                  <h2 className=" font-medium text-3xl text-gray-900 ">$276576</h2>
                </div>
                <p className="leading-relaxed font-medium text-center py-3">+36% Last Month</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full ">
              <div className="border-2 border-gray-200 px-9 py-2 rounded-lg shadow-lg">
                <div className=" py-5    flex items-center">
                  <div className="bg-red-600  rounded-full h-12 w-12 flex justify-center items-center ">
                    <PeopleIcon className="text-white " />
                  </div>
                  <span className="ml-2 text-lg font-semibold">Customers</span>
                </div>
                <div className=" flex items-center justify-center ">
                  <ArrowUpwardIcon className="text-green-400 " />
                  <h2 className=" font-medium text-3xl text-gray-900 ">86576</h2>
                </div>
                <p className="leading-relaxed font-medium text-center py-3">+88% Last Month</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-10 py-2 rounded-lg shadow-lg">
                <div className=" py-5    flex items-center">
                  <div className="bg-blue-700  rounded-full h-12 w-12 flex justify-center items-center ">
                    <PersonIcon className="text-white " />
                  </div>
                  <span className="ml-2 text-lg font-semibold">Sales</span>
                </div>
                <div className=" flex items-center justify-center ">
                  <ArrowDownwardIcon className="text-black " />
                  <h2 className=" font-medium text-3xl text-gray-900 ">6576</h2>
                </div>
                <p className="leading-relaxed font-medium text-center py-3">+66% Last Month</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-10 py-2 rounded-lg shadow-lg">
                <div className=" py-5   flex items-center">
                  <div className="bg-purple-400  rounded-full h-12 w-12 flex justify-center items-center ">
                    <GitHubIcon className="text-white " />
                  </div>
                  <span className="ml-2 text-lg font-semibold">Cattles</span>
                </div>
                <div className=" flex items-center justify-center ">
                  <ArrowDownwardIcon className="text-red-400 " />
                  <h2 className=" font-medium text-3xl text-gray-900 ">76576</h2>
                </div>
                <p className="leading-relaxed font-medium text-center py-3">+70% Last Month</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
