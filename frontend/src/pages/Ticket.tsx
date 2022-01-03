import { Button, Card, Title } from '@mantine/core';
import React from 'react';
import { useParams } from 'react-router';

interface Props {}

const Ticket = (props: Props) => {
  const { id } = useParams();
  return (
    <div>
      <Title order={2} className='mb-4'>
        Student Ticket ( id : {id})
      </Title>
      <Card shadow='sm' padding='lg' className='w-full flex flex-col space-y-3'>
        <div>
          <span className='text-gray-400 text-sm'>Ticket title : </span> Ticket
          title azerty
        </div>
        <div>
          <span className='text-gray-400 text-sm'>Student Name : </span> Firas
          Jaber
        </div>
        <div>
          <span className='text-gray-400 text-sm'>Student Email : </span>{' '}
          azerty@gmail.com
        </div>
        <div>
          <span className='text-gray-400 text-sm'>Student Phone : </span>{' '}
          9123123
        </div>
        <div>
          <span className='text-gray-400 text-sm'>Submitted at : </span> 21 Jun
          2001
        </div>
        <div>
          <span className='text-gray-400 text-sm'>Message : </span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odio
          quasi omnis odit qui beatae corporis quod explicabo voluptate, vel
          doloremque unde repudiandae eligendi maiores voluptatum tempora alias
          aliquam. Totam.
        </p>
        <div className='flex items-center space-x-2 mt-4'>
          <Button variant='outline' color='green'>
            Resolve
          </Button>
          <Button variant='outline' color='red'>
            Delete
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Ticket;
