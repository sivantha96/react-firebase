import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Alert from '../../components/Alert';
import Button from '../../components/Button';
import FormField from '../../components/FormField';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const { login, currentUser } = useAuth();
  const history = useHistory();

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    setError('');

    if (!emailRef.current.value || !passwordRef.current.value) {
      return setError('Fill all the required details');
    }

    try {
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="grid place-items-center h-screen container mx-auto">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-lg flex flex-col justify-center rounded shadow-lg p-5 border"
      >
        <span className="text-3xl text-center mb-4">Login</span>
        <Alert title={error} />

        <FormField
          forwardedRef={emailRef}
          label="Email"
          type="email"
          placeholder="Enter your email"
        />
        <FormField
          forwardedRef={passwordRef}
          label="Password"
          type="password"
          placeholder="Enter your password"
        />
        <Button disabled={loading} type="submit" className="mt-3">
          Login
        </Button>
        <div className="flex-row flex w-full justify-center mt-2">
          Need an account?
          <Link className="ml-1 hover:text-blue-400" to="/signup">
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
