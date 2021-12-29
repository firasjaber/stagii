import { KeyIcon, MailIcon, UserIcon } from '@heroicons/react/solid';
import {
  Button,
  Paper,
  Radio,
  RadioGroup,
  Text,
  TextInput,
} from '@mantine/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Brand from '../components/Brand';

interface Props {}

const Register = (props: Props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='bg-gray-100 h-screen w-screen flex items-center justify-center'>
      <Paper
        padding='md'
        shadow='xs'
        className='-m-24 w-80 flex flex-col items-center'
      >
        <Brand />
        <Text className='font-semibold text-center text-lg my-2'>
          Register a new account
        </Text>

        <div className='space-y-2 w-full px-2'>
          <TextInput
            value={firstName}
            placeholder='Joe'
            label='First Name'
            icon={<UserIcon className='w-6 h-6 opacity-60' />}
            onChange={(event) => setEmail(event.currentTarget.value)}
            required
          />
          <TextInput
            value={lastName}
            placeholder='Doe'
            label='Last Name'
            icon={<UserIcon className='w-6 h-6 opacity-60' />}
            onChange={(event) => setEmail(event.currentTarget.value)}
            required
          />
          <TextInput
            value={email}
            placeholder='contact@email.com'
            type='email'
            label='Email address'
            icon={<MailIcon className='w-6 h-6 opacity-60' />}
            onChange={(event) => setEmail(event.currentTarget.value)}
            required
          />
          <TextInput
            value={password}
            label='Password'
            placeholder='************'
            icon={<KeyIcon className='w-6 h-6 opacity-60' />}
            onChange={(event) => setPassword(event.currentTarget.value)}
            required
          />
          <RadioGroup label='Are you a :' variant='vertical' required>
            <Radio value='STUDENT'>Student</Radio>
            <Radio value='EMPLOYER'>Employer</Radio>
            <Radio value='ADMINISTRATIVE'>Administrative</Radio>
          </RadioGroup>
        </div>
        <Button variant='outline' className='w-[270px] mb-2 mt-6'>
          Sign up
        </Button>
        <Text>
          Already have an account ?
          <Link
            to='/login'
            className='underline text-blue-400 font-semibold text-center'
          >
            Login
          </Link>
        </Text>
      </Paper>
    </div>
  );
};

export default Register;
