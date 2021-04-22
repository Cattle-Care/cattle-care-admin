import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_CATTLE = gql`
  query getCattle {
    allCattle {
      id
      name
      age
      category
      weight
    }
  }
`;
function Item() {
  const { data } = useQuery(GET_CATTLE);
  return (
    <>
      {data.allCattle.map(cattle => (
        <>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className=" ">
                  <div className="text-sm font-medium text-gray-900" />
                  <div className="text-sm text-gray-500">{cattle.name}</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">{cattle.age}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">{cattle.category}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">{cattle.weight}</div>
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <a href="/" className="text-indigo-600 hover:text-indigo-900">
                Edit
              </a>
            </td>
          </tr>
        </>
      ))}

      {/* </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className=" ">
            <div className="text-sm font-medium text-gray-900" />
            <div className="text-sm text-gray-500">jane.cooper@example.com</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
        <div className="text-sm text-gray-500">Optimization</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Active
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="/" className="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
      </td> */}
    </>
  );
}

export default Item;
