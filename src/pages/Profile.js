import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Layout from '../components/global/Layout';

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
function Profile() {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const { error, data, loading } = useQuery(getProfile);
  const email = data ? data.me.email : null;
  const firstName = data ? data.me.profile.firstName : null;
  const lastName = data ? data.me.profile.lastName : null;
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
            <h3 className=" text-sm bold font-sans">{`${firstName}${' '}${lastName}`}</h3>
            <p className="mt-2 font-sans font-light text-grey-dark">{email}</p>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Profile;
