import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Register = (props: Props) => {
  return (
    <div>
      <Link to='/'>Sign up</Link>
      <Link to='/login'>Login</Link>
    </div>
  );
};

export default Register;
