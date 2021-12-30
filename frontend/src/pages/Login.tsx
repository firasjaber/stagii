import { KeyIcon, MailIcon } from '@heroicons/react/solid';
import { Button, Paper, Text, TextInput } from '@mantine/core';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Brand from '../components/Brand';
import useAuth from '../contexts/useAuth';

interface Props {}

const Login = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, error, user, loading } = useAuth();

  if (user) {
    return <Navigate to='/' />;
  }
  return (
    <div className='bg-gray-100 h-screen w-screen flex items-center justify-center'>
      <Paper
        padding='md'
        shadow='xs'
        className='-m-24 w-80 flex flex-col items-center'
      >
        <Brand />
        <Text className='font-semibold text-center text-lg my-2'>
          Authentication
        </Text>

        <div className='space-y-2 w-full px-2'>
          <TextInput
            value={email}
            placeholder='contact@email.com'
            type='email'
            label='Email address'
            icon={<MailIcon className='w-6 h-6 opacity-60' />}
            onChange={(event) => setEmail(event.currentTarget.value)}
            error={error}
            required
          />
          <TextInput
            value={password}
            label='Password'
            type='password'
            placeholder='************'
            icon={<KeyIcon className='w-6 h-6 opacity-60' />}
            onChange={(event) => setPassword(event.currentTarget.value)}
            invalid={error ? true : false}
            error={error}
            required
          />
        </div>
        <Button
          variant='outline'
          className='w-[270px] mb-2 mt-6'
          onClick={() => login(email, password)}
          loading={loading}
        >
          Sign In
        </Button>
        <Text className='mb-4'>
          You dont have an account ?
          <Link
            to='/register'
            className='underline text-blue-400 font-semibold text-center'
          >
            {' '}
            Register
          </Link>
        </Text>
      </Paper>
    </div>
  );
};

export default Login;
