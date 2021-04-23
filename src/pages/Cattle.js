import React from 'react';

import { gql, useMutation } from '@apollo/client';
import { Pager } from '../components/elements';
import Layout from '../components/global/Layout';
import AddCattle from '../components/AddCattle';
import Item from '../components/Cattle/Item';

const addCattleMutation = gql`
  mutation addCattle($input: CattleInput!) {
    addCattle(input: $input) {
      id
      name
      age
      weight
    }
  }
`;

// eslint-disable-next-line react/prop-types
function Cattle() {
  const [showModal, setShowModal] = React.useState(false);

  const [addCattleAction, { loading }] = useMutation(addCattleMutation, {
    onCompleted: ({ addCattle }) => {
      console.log('addCattle', addCattle);
      setShowModal(false);
    },
    onError: error => {
      console.log('error', error);
    },
  });

  return (
    <Layout>
      <Pager>
        <div className="mx-auto  max-w-screen-xl ">
          <div className="flex justify-end items-center   h-20">
            <button
              className="flex items-center mr-10 bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Add Cattle
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>
          {showModal && (
            <AddCattle
              loading={loading}
              onSubmit={values => {
                addCattleAction({
                  variables: {
                    input: {
                      name: values.name,
                      age: parseInt(values.age, 10),
                      category: values.category,
                      weight: parseInt(values.weight, 10),
                    },
                  },
                });
              }}
              onClose={() => setShowModal(false)}
            />
          )}

          <div className="flex flex-col w-11/12 mx-auto py-5">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Age
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Weight
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Edit
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <Item />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Pager>
    </Layout>
  );
}

export default Cattle;
