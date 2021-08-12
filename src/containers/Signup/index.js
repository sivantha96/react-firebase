import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../../components/Alert';
import Button from '../../components/Button';
import FormField from '../../components/FormField';
import { useAuth } from '../../contexts/AuthContext';

const SignUp = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const { signUp, currentUser } = useAuth();

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    setError('');

    if (
      !emailRef.current.value ||
      !passwordRef.current.value ||
      !confirmPasswordRef.current.value
    ) {
      return setError('Fill all the required details');
    }

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Password do not match');
    }

    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="grid place-items-center h-screen container mx-auto">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-lg flex flex-col justify-center rounded shadow-lg p-5 border"
      >
        <span className="text-3xl text-center mb-4">Sign Up</span>
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
        <FormField
          forwardedRef={confirmPasswordRef}
          label="Confirmation Password"
          type="password"
          placeholder="Enter your password again"
        />
        <Button disabled={loading} type="submit" className="mt-3">
          Sign Up
        </Button>
        <div className="flex-row flex w-full justify-center mt-2">
          Already have an account?
          <Link className="ml-1 hover:text-blue-400" to="/login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
