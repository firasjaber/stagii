import { Button, Card, Textarea, TextInput, Title } from '@mantine/core';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import useAuth from '../contexts/useAuth';

interface Props {}

const AddTicket = (props: Props) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const API_URL = 'http://localhost:4000/student/ticket';
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };
    try {
      const body = {
        id: user._id,
        title,
        studentName: user.firstName + ' ' + user.firstName,
        studentEmail: user.email,
        studentPhone: user.phone,
        message,
      };
      console.log(body);
      console.log(user);
      setLoading(true);
      const res = await axios.post(API_URL, body, config);
      navigate('/tickets');
      setLoading(false);
      console.log(res);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div>
      <Title order={2} className='mb-4'>
        Add new ticket
      </Title>
      <Card shadow='sm' padding='lg' className='w-full space-y-2'>
        <TextInput
          value={title}
          name='title'
          placeholder='Your ticket title'
          label='Ticket Title'
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Textarea
          value={message}
          placeholder='Enter your message here...'
          name='bio'
          label='Ticket Message'
          rows={8}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <Button
          variant={'outline'}
          color={'green'}
          onClick={() => handleSubmit()}
          loading={loading}
        >
          Submit
        </Button>
      </Card>
    </div>
  );
};

export default AddTicket;
