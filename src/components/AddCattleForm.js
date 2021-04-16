import React from 'react';
import { Formik } from 'formik';

// eslint-disable-next-line react/prop-types
function AddCattle({ onSubmit }) {
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
          <div className="my-2 text-gray-400">Name</div>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            className="w-full p-2 bg-transparent focus:border-b-4 focus:border-blue-900 hover:border-green-400 px-8 border-b-2 text-black border-blue-700  outline-none "
          />
          <div className="my-2 text-gray-400">Age</div>
          <input
            type="text"
            name="age"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.age}
            className="w-full p-2 bg-transparent focus:border-blue-900 hover:border-green-400 px-8 border-b-2 text-black border-blue-700   outline-none "
          />
          <div className="leading-10 text-gray-400">Category</div>
          <input
            type="text"
            name="category"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.category}
            className="w-full p-2  bg-transparent focus:border-blue-900 hover:border-green-400 px-8 border-b-2 text-black border-blue-700   outline-none "
          />
          <div className=" text-gray-400">Weight</div>
          <input
            type="text"
            name="weight"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.weight}
            className="w-full p-2 bg-transparent focus:border-blue-900 hover:border-green-400 px-8 border-b-2 text-black border-blue-700   outline-none "
          />
        </form>
      )}
    </Formik>
  );
}

export default AddCattle;
