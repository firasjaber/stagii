import { Avatar, Button, Card, Skeleton, Title } from '@mantine/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { format } from 'date-fns';

interface Props {}

const Student = (props: Props) => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({} as any);
  const url = 'http://localhost:4000/student/' + params.id;
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      setLoading(false);
      setData(res.data.data);
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
        Student Profile ( id : 0 )
      </Title>
      {loading ? (
        <Skeleton height={800} mt={3} width='100%' radius='md' />
      ) : (
        <Card shadow='sm' padding='lg' className='w-full '>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col space-y-3'>
              <div>
                <span className='text-gray-400 text-sm'>Student name : </span>{' '}
                {data.studentName}
              </div>
              <div>
                <span className='text-gray-400 text-sm'>Major : </span>{' '}
                {data.major}
              </div>
              <div>
                <span className='text-gray-400 text-sm'>Class group : </span>{' '}
                {data.classGroup}
              </div>
              <div>
                <span className='text-gray-400 text-sm'>CIN Number : </span>{' '}
                {data.cin}
              </div>
              <div>
                <span className='text-gray-400 text-sm'>Email : </span>{' '}
                {data.studentEmail}
              </div>
              <div>
                <span className='text-gray-400 text-sm'>Phone : </span>{' '}
                {data.studentPhone}
              </div>
              <div>
                <span className='text-gray-400 text-sm'>Location : </span>{' '}
                {data.location}
              </div>
              <div>
                <span className='text-gray-400 text-sm'>Linkedin : </span>{' '}
                {data.linkedinProfile}
              </div>
              <div>
                <span className='text-gray-400 text-sm'>Joined at : </span>{' '}
                {data?.createdAt &&
                  format(new Date(data?.createdAt), 'do MMMM yyyy hh:mm')}
              </div>
              <div>
                <span className='text-gray-400 text-sm'>
                  Previous Internship :{' '}
                </span>{' '}
                None
              </div>
              <div className='text-green-500'>
                <span className='text-gray-400 text-sm'>In-Internship : </span>{' '}
                Yes
              </div>
              <div>
                <span className='text-gray-400 text-sm'>
                  Current Internship :{' '}
                </span>{' '}
                Incedo GmbH
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
              <span className='text-gray-400 text-sm'>Bio : </span>
            </div>
            <p>{data.bio}</p>
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

export default Student;
