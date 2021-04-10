import React from 'react';
 import  Pager  from '../components/elements/Pager';
import Layout from '../components/global/Layout';
function Categories() {
  return (
    <Layout>
   <Pager>
      <div className="mx-auto  max-w-screen-xl ">
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
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className=" ">
                            <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className=" ">
                            <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className=" ">
                            <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className=" ">
                            <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
                          </div>
                        </div>
                      </td>
                    </tr>
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

export default Categories;
