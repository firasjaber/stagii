import { Avatar, Button, Card, Title } from '@mantine/core';
import React from 'react';

interface Props {}

const Offer = (props: Props) => {
  const imgUrl =
    'https://thumbs.dreamstime.com/b/amazon-logo-editorial-vector-illustration-market-136495269.jpg';
  return (
    <div>
      <Title order={2} className='mb-4'>
        Offer ( id : 0 )
      </Title>
      <Card shadow='sm' padding='lg' className='w-full '>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col space-y-3'>
            <div>
              <span className='text-gray-400 text-sm'>Company name : </span>{' '}
              Amazon LLC
            </div>
            <div>
              <span className='text-gray-400 text-sm'>Field : </span> Web
              Development
            </div>
            <div>
              <span className='text-gray-400 text-sm'>Internship Type : </span>{' '}
              End of Studies Project
            </div>
            <div>
              <span className='text-gray-400 text-sm'>Starts at : </span> 12 Jun
              2021
            </div>
            <div>
              <span className='text-gray-400 text-sm'>Ends at : </span> 12 Mars
              2021
            </div>
            <div>
              <span className='text-gray-400 text-sm'>Posted at : </span> 12 Jun
              2001
            </div>

            <div className='text-green-500'>
              <span className='text-gray-400 text-sm'>Still Open : </span> Yes
            </div>
          </div>
          <div>
            <Avatar
              size={150}
              className='rounded-full m-4 shadow'
              src={imgUrl}
            />
          </div>
        </div>
        <div className='mt-3'>
          <div>
            <span className='text-gray-400 text-sm'>Description : </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odio
            quasi omnis odit qui beatae corporis quod explicabo voluptate.
          </p>
          <div className='flex items-center space-x-2 mt-4'>
            <Button variant='outline' color='green'>
              Submit
            </Button>
            <Button variant='outline' color='red'>
              Delete
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Offer;
