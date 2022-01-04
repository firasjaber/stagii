import { TrashIcon } from '@heroicons/react/solid';
import { Avatar, Button, Card, Skeleton, Title } from '@mantine/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { format } from 'date-fns';

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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = 'http://localhost:4000/student/notification/all';
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      setData(res.data.notifications);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: any) => {
    const url = 'http://localhost:4000/student/notification/' + id;

    try {
      await axios.delete(url);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='w-full'>
      <div className='flex flex-row items-center justify-between mb-4'>
        <Title order={2}>Notfications</Title>
      </div>
      <div className='space-y-4 w-full'>
        {loading ? (
          <Skeleton height={800} mt={3} width='100%' radius='md' />
        ) : (
          data.map((ticket: any) => (
            <Card
              shadow='sm'
              padding='lg'
              className='w-full flex flex-row items-center justify-between'
            >
              <div className='block'>
                <div>{ticket.message} </div>
                <div className='text-sm text-gray-400'>
                  {ticket?.createdAt &&
                    format(new Date(ticket?.createdAt), 'do MMMM yyyy hh:mm')}
                </div>
              </div>
              <div className='flex flex-row items-center space-x-2'>
                <Avatar radius='xl' />
                <div className='pr-4'>{ticket.studentName}</div>
                <TrashIcon
                  onClick={() => handleDelete(ticket._id)}
                  className='w-8 h-8 p-2 text-orange-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-all ease-in-out cursor-pointer'
                />
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Notifications;
