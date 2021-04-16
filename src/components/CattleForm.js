import React from 'react';
import { Formik } from 'formik';

// eslint-disable-next-line react/prop-types
function CattleForm({ error, onSubmit }) {
  console.log('error', error);
  return (
    <Formik
      initialValues={{ name: '', age: '', category: '', weight: '' }}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        }
        return errors;
      }}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form
          onSubmit={event => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <input
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            className="w-full p-2 bg-transparent focus:border-b-4 focus:border-blue-900 hover:border-green-400 px-8 border-b-2 text-black border-blue-700  outline-none "
          />

          <input
            type="text"
            name="age"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.age}
            className="w-full p-2 bg-transparent focus:border-blue-900 hover:border-green-400 px-8 border-b-2 text-black border-blue-700   outline-none "
          />

          <input
            type="text"
            name="category"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.category}
            className="w-full p-2 bg-transparent focus:border-blue-900 hover:border-green-400 px-8 border-b-2 text-black border-blue-700   outline-none "
          />

          <input
            type="text"
            name="weight"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.weight}
            className="w-full p-2 bg-transparent focus:border-blue-900 hover:border-green-400 px-8 border-b-2 text-black border-blue-700   outline-none "
          />
          <button
            className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
            // onClick={() => setShowModal(false)}
          >
            Save Changes
          </button>
        </form>
      )}
    </Formik>
  );
}
export default CattleForm;
