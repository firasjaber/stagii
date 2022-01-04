import { Avatar, Button, Card, Skeleton, Title } from '@mantine/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { format } from 'date-fns';

interface Props {}

const Tickets = (props: Props) => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = 'http://localhost:4000/student/ticket/all';
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      setData(res.data.tickets);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='w-full'>
      <div className='flex flex-row items-center justify-between mb-4'>
        <Title order={2}>Students Tickets</Title>
        <Button variant='outline' onClick={() => navigate('/newticket')}>
          Add Ticket
        </Button>
      </div>
      <div className='space-y-4 w-full'>
        {loading ? (
          <Skeleton height={800} mt={3} width='100%' radius='md' />
        ) : (
          data.map((ticket: any) => (
            <Card
              shadow='sm'
              padding='lg'
              className='w-full flex flex-row items-center justify-between hover:bg-gray-200 cursor-pointer transition-all ease-in-out'
              onClick={() => navigate('/ticket/' + ticket._id)}
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
                <div className='text-sm text-gray-400'>
                  {ticket?.createdAt &&
                    format(new Date(ticket?.createdAt), 'do MMMM yyyy hh:mm')}
                </div>
              </div>
              <div className='flex flex-row items-center space-x-2'>
                <Avatar radius='xl' />
                <div>{ticket.studentName}</div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Tickets;
