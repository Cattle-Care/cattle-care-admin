import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik } from 'formik';

function Login() {
  return (
    <>
      <div className="w-screen h-screen flex  ">
        <div className="w-1/2 h-screen bg-blue-500 flex justify-center items-center">
          <div className="w-4/5">
            <h1 className="text-4xl font-bold text-white">Welcome To Cattle Care Admin</h1>
            <p className="py-5 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla nisl
              nec justo suscipit consectetur. Integer gravida justo at dui aliquet, ac pulvinar enim
              sodales. Donec a nisi vitae sapien posuere ullamcorper.
            </p>
          </div>
        </div>

        <div className="w-1/2 h-screen flex justify-center items-center  ">
          <div className="w-96 h-96   ">
            <h2 className="text-blue-600 text-2xl  font-medium title-font mb-5">Login To Admin</h2>
            <div className="relative mb-4">
              <p htmlFor="full-name" className="leading-7 text-sm font-semibold text-blue-600">
                Email
              </p>
              <div className="text-blue-600 absolute py-2">
                <MailOutlineIcon />
              </div>
            </div>
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                // eslint-disable-next-line no-alert
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }}
            >
              {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
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
                    type="text"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className="w-full p-2 bg-transparent focus:border-blue-900 hover:border-green-400 px-8  border-b-2 text-black  border-blue-700  outline-none "
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-gray-200 bg-blue-600 border-0 py-2 my-2 px-8 focus:outline-none
                    hover:bg-blue-700 rounded text-lg"
                  >
                    Login
                  </button>
                </form>
              )}
            </Formik>
            <p className="text-xs text-blue-600 mt-3 font-semibold">
              Please Enter Your Email And Password
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
