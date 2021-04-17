import React from 'react';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function LoginForm({ loading = false, error, onSubmit }) {
  console.log('error', error);
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
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
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className="w-full p-2 bg-transparent focus:border-b-4 focus:border-blue-900 hover:border-green-400 px-8 border-b-2 text-black border-blue-700  outline-none "
          />

          <div className="relative mb-4">
            <p className="leading-7 text-sm font-semibold text-blue-600">Password</p>
            <div className="text-blue-600 absolute py-2">
              <LockOutlinedIcon />
            </div>
          </div>

          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className="w-full p-2 bg-transparent focus:border-blue-900 hover:border-green-400 px-8  border-b-2 text-black  border-blue-700  outline-none "
          />

          <button
            type="submit"
            className="text-gray-200 bg-blue-600 border-0 py-2 my-2 px-8 focus:outline-none
                    hover:bg-blue-700 rounded text-lg"
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
          <Link to="/register">
            <button
              type="button"
              className="text-gray-200 bg-blue-600 border-0 py-2 my-2 px-8 focus:outline-none
                    hover:bg-blue-700 rounded text-lg ml-8"
            >
              Register
            </button>
          </Link>
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
