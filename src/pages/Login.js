import React from 'react';
import PropTypes from 'prop-types';
import { gql, useMutation } from '@apollo/client';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LoginForm from '../components/LoginForm';

const loginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      jwt
      user {
        id
        email
        profile {
          firstName
          lastName
        }
      }
    }
  }
`;

function Login({ history }) {
  const [loginAction, { loading, error }] = useMutation(loginMutation, {
    onCompleted: ({ login }) => {
      window.localStorage.setItem('token', login.jwt);
      history.push('/');
    },
  });

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
            <LoginForm
              loading={loading}
              error={error}
              onSubmit={values => {
                loginAction({
                  variables: { email: values.email, password: values.password },
                });
              }}
            />
            <p className="text-xs text-blue-600 mt-3 font-semibold">
              Please Enter Your Email And Password
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Login;
