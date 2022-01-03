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
    imgUrl:
      'https://thumbs.dreamstime.com/b/amazon-logo-editorial-vector-illustration-market-136495269.jpg',
    companyName: 'Amazon LLC',
    internshipField: 'Web Development',
  },
  {
    id: 1,
    title: 'Title ticket azerty',
    pending: true,
    date: '20 Jun 2001',
    studentName: 'Firas Jaber',
    imgUrl:
      'https://thumbs.dreamstime.com/b/amazon-logo-editorial-vector-illustration-market-136495269.jpg',
    companyName: 'Amazon LLC',
    internshipField: 'Web Development',
  },
  {
    id: 2,
    title: 'Title ticket azerty',
    pending: false,
    date: '20 Jun 2001',
    studentName: 'Firas Jaber',
    imgUrl:
      'https://thumbs.dreamstime.com/b/amazon-logo-editorial-vector-illustration-market-136495269.jpg',
    companyName: 'Amazon LLC',
    internshipField: 'Web Development',
  },
  {
    id: 3,
    title: 'Title ticket azerty',
    pending: false,
    date: '20 Jun 2001',
    studentName: 'Firas Jaber',
    imgUrl:
      'https://thumbs.dreamstime.com/b/amazon-logo-editorial-vector-illustration-market-136495269.jpg',
    companyName: 'Amazon LLC',
    internshipField: 'Web Development',
  },
];

const Submits = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className='w-full'>
      <div className='flex flex-row items-center justify-between mb-4'>
        <Title order={2}>Students Internship Submits</Title>
      </div>
      <div className='space-y-4 w-full'>
        {data.map((submit) => (
          <Card
            shadow='sm'
            padding='lg'
            className='w-full flex flex-row items-center justify-between hover:bg-gray-200 cursor-pointer transition-all ease-in-out'
            onClick={() => navigate('/submit/' + submit.id)}
          >
            <div className='block'>
              <div>
                {submit.internshipField}{' '}
                <span
                  className={
                    submit.pending
                      ? 'text-sm text-orange-400 opacity-80'
                      : 'text-sm text-green-600 opacity-80'
                  }
                >
                  {submit.pending ? 'Pending' : 'Approved'}
                </span>
              </div>
              <div className='text-sm text-gray-400'>{submit.date}</div>
            </div>
            <div className='flex flex-row items-center space-x-2'>
              <Avatar radius='xl' />
              <div>{submit.studentName + '  at  '}</div>
              <Avatar radius='xl' src={submit.imgUrl} />
              <div>{submit.companyName}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Submits;
