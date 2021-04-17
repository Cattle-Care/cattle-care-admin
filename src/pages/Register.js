import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

function Register() {
  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      firstName: yup.string().required(' First name is required!'),
      lastName: yup.string().required(' Last name is required!'),
      email: yup
        .string()
        .email('Enter valid email address!')
        .required('Email address is required'),
      password: yup
        .string()
        .min(2, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
    }),

    onSubmit: values => {
      console.log('value of formik', values);
    },
    // onSubmit: () => {
    //   // const input = {
    //   //   email: values.email,
    //   //   firstName: values.firstName,
    //   //   lastName: values.lastName,
    //   //   password: values.password,
    //   // };
    // },
  });
  const { values, handleBlur, handleChange, handleSubmit, touched, errors } = formik;

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
            <h2 className="text-blue-600 text-2xl  font-medium title-font mb-5">
              Register To Admin
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  value={values.firstName}
                  placeholder="First Name"
                  onBlur={handleBlur('firstName')}
                  error={errors.firstName}
                  touched={touched.firstName}
                  onChange={handleChange('firstName')}
                  className="w-full  text-black focus:border-b-4 focus:border-blue-900 hover:border-green-400  border-b-2  border-blue-700  outline-none "
                />
              </div>
              <div className="mb-6">
                <input
                  value={values.lastName}
                  onBlur={handleBlur('lastName')}
                  error={errors.lastName}
                  touched={touched.lastName}
                  onChange={handleChange('lastName')}
                  placeholder="Last Name"
                  className="w-full  text-black focus:border-b-4 focus:border-blue-900 hover:border-green-400  border-b-2  border-blue-700  outline-none "
                />
              </div>
              <div className="mb-6">
                <input
                  value={values.email}
                  onBlur={handleBlur('email')}
                  error={errors.email}
                  touched={touched.email}
                  onChange={handleChange('email')}
                  placeholder="Email"
                  className="w-full  text-black focus:border-b-4 focus:border-blue-900 hover:border-green-400  border-b-2  border-blue-700  outline-none "
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  value={values.password}
                  placeholder="Password"
                  onBlur={handleBlur('password')}
                  error={errors.password}
                  touched={touched.password}
                  onChange={handleChange('password')}
                  className="w-full  text-black focus:border-b-4 focus:border-blue-900 hover:border-green-400  border-b-2  border-blue-700  outline-none "
                />
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="text-gray-200 bg-blue-600 border-0 py-2 my-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg"
              >
                Register
              </button>
              <Link to="/Login">
                <button
                  type="button"
                  className="text-gray-200 bg-blue-600 border-0 py-2 my-2 px-8 ml-4 focus:outline-none hover:bg-blue-700 rounded text-lg"
                >
                  Login
                </button>
              </Link>
            </form>
            {/* <p className="text-xs text-blue-600 mt-3 font-semibold">
              Please Enter Your Email And Password
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
