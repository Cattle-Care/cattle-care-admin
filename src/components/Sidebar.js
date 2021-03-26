import { Link } from 'react-router-dom';
function Sidebar() {
  return (
   
    <div className="flex flex-row ">
      <div className="scrollbar-thin w-full scrollbar-thumb-gray-300 scrollbar-track-white overflow-y-scroll scrollbar-thumb-rounded-full bg-white items-stretch h-screen shadow-2xl ">
        <div className="p-6 bg-blue-900 ">
          <div className="flex flex-row justify-start items-center">
            <img
              className="h-10 w-10 rounded-full"
              src="https://st4.depositphotos.com/15809744/21290/v/380/depositphotos_212905838-stock-illustration-black-angus-cattle-logo-emblem.jpg"
              alt="logo"
            ></img>
            <p className="pl-2 text-white text-lg font-bold">Cattle Care</p>
          </div>
        </div>

        <div
          className="py-4 flex flex-col justify-center items-center  space-y-2"
          style={{ backgroundColor: "#f4f5fd" }}
        >
          <img
            className="h-12 w-auto rounded-full"
            src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
            alt="user-img"
          ></img>
          <p className="text-black font-bold">Emma Tailor</p>
          <p className="text-black font-semibold opacity-70">Senior Web devloper</p>
          <button className="py-2 px-4 bg-blue-900 rounded-lg text-sm text-white text-center ">
            View Profile
          </button>
        </div>
        <div className="space-y-2">
          <p className=" font-bold pl-4 pt-4 mb-6 text-sm">NAVIGATIONAL MENU</p>
          <div className="bg-transparent py-2 rounded-r-full hover:bg-gray-200 mr-2 hover:text-blue-500">
            <div className="flex flex-row items-center ml-4">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <Link to="/dashboard">
              <a href="#" className="ml-4 text-sm font-semibold">
                Dashboard
              </a>
              </Link>
            </div>

          </div>
          <div className="bg-transparent py-2 rounded-r-full hover:bg-gray-200 mr-2 hover:text-blue-500">
            <div className="flex flex-row items-center ml-4">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <a href="#" className="ml-4 text-sm font-semibold">
                Cattle
              </a>
            </div>
          </div>
          <div className="bg-transparent py-2 rounded-r-full hover:bg-gray-200 mr-2 hover:text-blue-500">
            <div className="flex flex-row items-center ml-4">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <Link to="/user">
              <a href="#" className="ml-4 text-sm font-semibold">
                Users
              </a>
              </Link>
              
            </div>
          </div>
          <div className="bg-transparent py-2 rounded-r-full hover:bg-gray-200 mr-2 hover:text-blue-500">
            <div className="flex flex-row items-center ml-4">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              <a href="#" className="ml-4 text-sm font-semibold">
                Categories
              </a>
            </div>
          </div>
          <div className="bg-transparent py-2 rounded-r-full hover:bg-gray-200 mr-2 hover:text-blue-500">
            <div className="flex flex-row items-center ml-4">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                />
              </svg>
              <a href="#" className="ml-4 text-sm font-semibold">
                Permission
              </a>
            </div>
          </div>
          <div className="bg-transparent py-2 rounded-r-full hover:bg-gray-200 mr-2 hover:text-blue-500">
            <div className="flex flex-row items-center ml-4">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <a href="#" className="ml-4 text-sm font-semibold">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Sidebar;
