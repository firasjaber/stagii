import { Avatar, Button, SimpleGrid, Title } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router';

interface Props {}

const data = [
  { id: 0, fullName: 'Firas Jaber', classN: 'MDW 31' },
  { id: 0, fullName: 'Tarak Chaffroud', classN: 'MDW 31' },
  { id: 0, fullName: 'Issam Jemaa', classN: 'MDW 23' },
  { id: 0, fullName: 'Mondhor Lekbair', classN: 'TUN 01' },
  { id: 0, fullName: 'Mondhor Gaurdiola', classN: 'TUN 02' },
  { id: 0, fullName: 'Ahmad Jamaica', classN: 'COL 71' },
];

const Students = (props: Props) => {
  return (
    <div>
      <Title order={2} className='mb-4'>
        Students
      </Title>
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: 'xl', cols: 4, spacing: 'md' },
          { maxWidth: 'lg', cols: 3, spacing: 'md' },
          { maxWidth: 'md', cols: 2, spacing: 'md' },
          { maxWidth: 'sm', cols: 1, spacing: 'sm' },
          { maxWidth: 'xs', cols: 1, spacing: 'sm' },
        ]}
      >
        {data.map((student) => (
          <StudentCard
            id={student.id}
            fullName={student.fullName}
            classN={student.classN}
          />
        ))}
      </SimpleGrid>
    </div>
  );
};

interface StudentCardProps {
  id: Number;
  fullName: string;
  classN: string;
}

const StudentCard = (props: StudentCardProps) => {
  const navigate = useNavigate();
  return (
    <div className='bg-white shadow p-6 flex flex-col items-center'>
      <Avatar size={120} className='rounded-full' />
      <div className='mt-2 mb-1 font-semibold text-2xl'>{props.fullName}</div>
      <div className='mb-3 text-gray-500'>{props.classN}</div>
      <Button
        variant={'outline'}
        onClick={() => navigate('/student/profile/' + props.id)}
      >
        View Profile
      </Button>
    </div>
  );
};

export default Students;
