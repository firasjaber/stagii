import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Login = (props: Props) => {
  return (
    <div>
      <Link to='/'>Sign in</Link>
      <Link to='/register'>Register</Link>
    </div>
  );
};

export default Login;
