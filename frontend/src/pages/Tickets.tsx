import { Avatar, Button, Card, Title } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router';

interface Props {}

const data = [
  {
    id: 0,
    title: 'Title ticket azerty',
    date: '20 Jun 2001',
    pending: true,
    studentName: 'Firas Jaber',
  },
  {
    id: 1,
    title: 'Title ticket azerty',
    pending: true,
    date: '20 Jun 2001',
    studentName: 'Firas Jaber',
  },
  {
    id: 2,
    title: 'Title ticket azerty',
    pending: false,
    date: '20 Jun 2001',
    studentName: 'Firas Jaber',
  },
  {
    id: 3,
    title: 'Title ticket azerty',
    pending: false,
    date: '20 Jun 2001',
    studentName: 'Firas Jaber',
  },
];

const Tickets = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className='w-full'>
      <div className='flex flex-row items-center justify-between mb-4'>
        <Title order={2}>Students Tickets</Title>
        <Button variant='outline'>Add Ticket</Button>
      </div>
      <div className='space-y-4 w-full'>
        {data.map((ticket) => (
          <Card
            shadow='sm'
            padding='lg'
            className='w-full flex flex-row items-center justify-between hover:bg-gray-200 cursor-pointer transition-all ease-in-out'
            onClick={() => navigate('/ticket/' + ticket.id)}
          >
            <div className='block'>
              <div>
                {ticket.title}{' '}
                <span
                  className={
                    ticket.pending
                      ? 'text-sm text-orange-400 opacity-80'
                      : 'text-sm text-green-600 opacity-80'
                  }
                >
                  {ticket.pending ? 'Pending' : 'Resolved'}
                </span>
              </div>
              <div className='text-sm text-gray-400'>{ticket.date}</div>
            </div>
            <div className='flex flex-row items-center space-x-2'>
              <Avatar radius='xl' />
              <div>{ticket.studentName}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
