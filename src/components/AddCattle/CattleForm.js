import React from 'react';
import { Formik } from 'formik';

// eslint-disable-next-line react/prop-types
function CattleForm({ loading, onSubmit }) {
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
          <h1 className="pt-5 text-blue-600">Name</h1>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            className="w-full  bg-transparent focus:border-b-4 focus:border-blue-900 hover:border-green-400  border-b-2 text-black border-blue-500  outline-none "
          />
          <h1 className="pt-5 text-blue-600">Age</h1>
          <input
            type="number"
            name="age"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.age}
            className="w-full  bg-transparent focus:border-blue-900 hover:border-green-400  border-b-2 text-black border-blue-500   outline-none "
          />
          <h1 className="pt-5 text-blue-600">Category</h1>
          <select
            className="w-full  bg-transparent focus:border-blue-900 hover:border-green-400  border-b-2 text-black border-blue-500   outline-none"
            name="category"
            value={values.category}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="zebu" label="zebu" />
            <option value="murrah" label="murrah" />
            <option value="crossBreed" label="crossBreed" />
          </select>
          <h1 className="pt-5 text-blue-600">Weight</h1>
          <input
            type="number"
            name="weight"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.weight}
            className="w-full  bg-transparent focus:border-blue-900 hover:border-green-400  border-b-2 text-black border-blue-500   outline-none "
          />
          <button
            className="bg-blue-500 my-5  text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
            // onClick={() => setShowModal(false)}
          >
            {loading ? 'Loading...' : 'Save Changes'}
          </button>
        </form>
      )}
    </Formik>
  );
}
export default CattleForm;
