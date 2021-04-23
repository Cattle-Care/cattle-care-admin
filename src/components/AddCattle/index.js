import React from 'react';
import CattleForm from './CattleForm';
import CattleIcon from '../svgs/addCattleIcon';

// eslint-disable-next-line react/prop-types
function Cattle({ loading, onClose, onSubmit }) {
  return (
    <div>
      <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/* content */}
          <div className="border-0  px-32 left-16 top-7 rounded-lg shadow-lg relative flex flex-col   bg-white outline-none focus:outline-none">
            {/* header */}
            <div className="flex  items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold text-blue-500 mr-9">Add Cattle</h3>
              <button type="button" onClick={onClose}>
                <CattleIcon />
              </button>
            </div>
            {/* body */}

            <div className="relative  flex-auto ">
              <div className="my-4  text-lg leading-relaxed">
                <CattleForm loading={loading} onSubmit={onSubmit} />
              </div>
            </div>
            {/* footer */}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b" />
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </div>
  );
}

export default Cattle;