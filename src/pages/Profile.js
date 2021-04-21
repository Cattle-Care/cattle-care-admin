import React from 'react';
import Layout from '../components/global/Layout';

function Profile() {
  return (
    <>
      <Layout>
        <div className="rounded   overflow-hidden shadow max-w-xs bg-blue-900 py-24 my-5 mx-10 ">
          <div className="flex justify-center -mt-8">
            <img
              src=" https://cdn0.iconfinder.com/data/icons/avatar-batch-1/512/profile_icon-11-128.png"
              className="rounded-full border-solid border-white border-2 -mt-3"
              alt="profile"
            />
          </div>
          <div className="text-center text-gray-300 px-3 pb-6 pt-2">
            <h3 className=" text-sm bold font-sans">nasim akhtar</h3>
            <p className="mt-2 font-sans font-light text-grey-dark">email</p>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Profile;
