import { Button, Card, Skeleton, Title } from '@mantine/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

interface Props {}

const Ticket = (props: Props) => {
  const { id } = useParams();
  const [data, setData] = useState({} as any);
  const [loading, setLoading] = useState(false);
  const url = 'http://localhost:4000/student/ticket/' + id;
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      setData(res.data.ticket);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Title order={2} className='mb-4'>
        Student Ticket
      </Title>
      {loading ? (
        <Skeleton height={800} mt={3} width='100%' radius='md' />
      ) : (
        <Card
          shadow='sm'
          padding='lg'
          className='w-full flex flex-col space-y-3'
        >
          <div>
            <span className='text-gray-400 text-sm'>Ticket title : </span>{' '}
            {data?.title}
          </div>
          <div>
            <span className='text-gray-400 text-sm'>Student Name : </span>{' '}
            {data?.studentName}
          </div>
          <div>
            <span className='text-gray-400 text-sm'>Student Email : </span>{' '}
            {data.studentEmail}
          </div>
          <div>
            <span className='text-gray-400 text-sm'>Student Phone : </span>{' '}
            {data.studentPhone}
          </div>
          <div>
            <span className='text-gray-400 text-sm'>Submitted at : </span> 21
            {data.createdAt}
          </div>
          <div>
            <span className='text-gray-400 text-sm'>Message : </span>
          </div>
          <p>{data.message}</p>
          <div className='flex items-center space-x-2 mt-4'>
            <Button variant='outline' color='green'>
              Resolve
            </Button>
            <Button variant='outline' color='red'>
              Delete
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Ticket;
