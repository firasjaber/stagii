import { TrashIcon } from '@heroicons/react/solid';
import { Avatar, Button, Card, Title } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router';

interface Props {}

const data = [
  {
    id: 0,
    title: 'Student affected at proxiweb',
    date: '20 Jun 2001',
    pending: true,
    studentName: 'Firas Jaber',
  },
  {
    id: 1,
    title: 'Studetn rejected',
    pending: true,
    date: '20 Jun 2001',
    studentName: 'khalil amamra',
  },
  {
    id: 2,
    title: 'PFE approved',
    pending: false,
    date: '20 Jun 2001',
    studentName: 'Firas Jaber',
  },
  {
    id: 3,
    title: 'Student affected',
    pending: false,
    date: '20 Jun 2001',
    studentName: 'Tarek chafroud',
  },
];

const Notifications = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className='w-full'>
      <div className='flex flex-row items-center justify-between mb-4'>
        <Title order={2}>Notfications</Title>
      </div>
      <div className='space-y-4 w-full'>
        {data.map((ticket) => (
          <Card
            shadow='sm'
            padding='lg'
            className='w-full flex flex-row items-center justify-between'
            onClick={() => navigate('/ticket/' + ticket.id)}
          >
            <div className='block'>
              <div>{ticket.title} </div>
              <div className='text-sm text-gray-400'>{ticket.date}</div>
            </div>
            <div className='flex flex-row items-center space-x-2'>
              <Avatar radius='xl' />
              <div className='pr-4'>{ticket.studentName}</div>
              <TrashIcon className='w-8 h-8 p-2 text-orange-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-all ease-in-out cursor-pointer' />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
