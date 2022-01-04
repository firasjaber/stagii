import { Avatar, Button, Card, Skeleton, Title } from '@mantine/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Props {}

const Company = (props: Props) => {
  const params = useParams();
  const [data, setData] = useState({} as any);
  const [loading, setLoading] = useState(false);
  const url = 'http://localhost:4000/company/' + params.id;
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      setData(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const imgUrl =
    'https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg';
  return (
    <div>
      <Title order={2} className='mb-4'>
        Company Profile ( id : 0 )
      </Title>
      {loading ? (
        <Skeleton height={800} mt={3} width='100%' radius='md' />
      ) : (
        <Card shadow='sm' padding='lg' className='w-full '>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col space-y-3'>
              <div>
                <span className='text-gray-400 text-sm'>Company name : </span>{' '}
                {data.companyName}
              </div>
              <div>
                <span className='text-gray-400 text-sm'>Secteur : </span>{' '}
                {data.secteur}
              </div>
              <div>
                <span className='text-gray-400 text-sm'>Location : </span>{' '}
                {data.location}
              </div>
              <div>
                <span className='text-gray-400 text-sm'>Website : </span>{' '}
                <a href='https://firrj.me' className='underline'>
                  {data.website}
                </a>
              </div>
              <div>
                <span className='text-gray-400 text-sm'>Reference : </span>{' '}
                {data.referance}
              </div>
              <div>
                <span className='text-gray-400 text-sm'>Responsable : </span>{' '}
                {data.responsable}
              </div>
              <div>
                <span className='text-gray-400 text-sm'>Company Email : </span>{' '}
                {data.companyEmail}
              </div>
              <div>
                <span className='text-gray-400 text-sm'>Company Phone : </span>{' '}
                {data.companyPhone}
              </div>

              <div>
                <span className='text-gray-400 text-sm'>Joined at : </span>{' '}
                {data.createdAt}
              </div>
              <div>
                <span className='text-gray-400 text-sm'>
                  Number of internships offered :{' '}
                </span>{' '}
                None
              </div>
            </div>
            <div>
              <Avatar
                size={150}
                className='rounded-full m-4'
                src={data.image}
              />
            </div>
          </div>
          <div className='mt-3'>
            <div>
              <span className='text-gray-400 text-sm'>Description : </span>
            </div>
            <p className='mt-2'>{data?.description}</p>
            <div className='flex items-center space-x-2 mt-4'>
              <Button variant='outline' color='red'>
                Delete
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Company;
