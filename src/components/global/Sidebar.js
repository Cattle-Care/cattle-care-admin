import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import {
  DashBoardIcon,
  CattleIcon,
  UsersIcon,
  CategoriesIcon,
  GlobalThermalIcon,
  LogoutIcon,
} from '../svgs';

const getProfile = gql`
  query {
    me {
      status
      profile {
        firstName
        lastName
      }
      email
    }
  }
`;
const handleClick = () => {
  window.localStorage.clear();
  window.location.reload();
};
const getProfileValue = () => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { error, data, loading } = useQuery(getProfile);
  console.log('value of data', data);
};
function Sidebar() {
  return (
    <div className="flex flex-row  ">
      <div className=" fixed  w-1/5 bg-white   h-screen shadow-md ">
        <div className="  py-5 bg-blue-900 h-20">
          <div className="flex flex-row justify-center items-center">
            <img
              className="h-10 w-10 rounded-full"
              src="https://st4.depositphotos.com/15809744/21290/v/380/depositphotos_212905838-stock-illustration-black-angus-cattle-logo-emblem.jpg"
              alt="logo"
            />
            <p className="pl-2 text-white text-lg font-bold">Cattle Care</p>
          </div>
        </div>
        <div className="py-4 flex flex-col justify-center items-center space-y-2   bg-gray-200">
          <img
            className="h-12 w-auto rounded-full"
            src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
            alt="user-img"
          />
          <p className="text-black font-bold">Emma Tailor</p>
          <p className="text-black font-semibold opacity-70">Senior Web devloper</p>
          <Link to="/profile">
            <button
              type="button"
              onClick={() => getProfileValue}
              className="py-2 px-4 bg-blue-900 rounded-lg text-sm text-white text-center focus:outline-none "
            >
              View Profile
            </button>
          </Link>
        </div>
        <div className="space-y-2 ">
          <p className=" font-bold pl-4 pt-4 mb-6 text-sm">NAVIGATIONAL MENU</p>
          <div className="bg-transparent py-2 rounded-r-full hover:bg-gray-200 mr-2 hover:text-blue-500">
            <div className="flex flex-row items-center ml-4">
              <DashBoardIcon />
              <Link to="/">
                <a href="/" className="ml-4 text-sm font-semibold">
                  Dashboard
                </a>
              </Link>
            </div>
          </div>
          <div className="bg-transparent py-2 rounded-r-full hover:bg-gray-200 mr-2 hover:text-blue-500">
            <div className="flex flex-row items-center ml-4">
              <CattleIcon />
              <Link to="/cattle">
                <a href="/" className="ml-4 text-sm font-semibold">
                  Cattle
                </a>
              </Link>
            </div>
          </div>
          <div className="bg-transparent py-2 rounded-r-full hover:bg-gray-200 mr-2 hover:text-blue-500">
            <div className="flex flex-row items-center ml-4">
              <UsersIcon />
              <Link to="/users">
                <a href="/" className="ml-4 text-sm font-semibold">
                  Users
                </a>
              </Link>
            </div>
          </div>
          <div className="bg-transparent py-2 rounded-r-full hover:bg-gray-200 mr-2 hover:text-blue-500">
            <div className="flex flex-row items-center ml-4">
              <CategoriesIcon />
              <Link to="/categories">
                <a href="/" className="ml-4 text-sm font-semibold">
                  Categories
                </a>
              </Link>
            </div>
          </div>
          <div className="bg-transparent py-2 rounded-r-full hover:bg-gray-200 mr-2 hover:text-blue-500">
            <div className="flex flex-row items-center ml-4">
              <GlobalThermalIcon />
              <a href="/" className="ml-4 text-sm font-semibold">
                Global thermal stress
              </a>
            </div>
          </div>
          <div className="bg-transparent py-2 rounded-r-full hover:bg-gray-200 mr-2 hover:text-blue-500">
            <div className="flex flex-row items-center ml-4">
              <LogoutIcon />
              <a href="/" className="ml-4 text-sm font-semibold" onClick={() => handleClick()}>
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
