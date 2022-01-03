import { Avatar, Button, SimpleGrid, Title } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router';

interface Props {}

const data = [
  {
    id: 0,
    companyName: 'Incedo GmbH',
    internshipField: 'Web Development',
    internshipType: 'PFE',
  },
  {
    id: 0,
    companyName: 'Incedo GmbH',
    internshipField: 'Web Development',
    internshipType: 'Perfection',
  },
  {
    id: 0,
    companyName: 'Amazon LLC',
    internshipField: 'Digital Markenting',
    internshipType: 'PFE',
  },
  {
    id: 0,
    companyName: 'Netflix CO',
    internshipField: 'Web Development',
    internshipType: 'PFE',
  },
  {
    id: 0,
    companyName: 'Meta Corp',
    internshipField: 'Devops',
    internshipType: 'PFE',
  },
];

const Offers = (props: Props) => {
  return (
    <div>
      <Title order={2} className='mb-4'>
        Offers
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
          <OfferCard
            id={student.id}
            companyName={student.companyName}
            internshipField={student.internshipField}
            internshipType={student.internshipType}
          />
        ))}
      </SimpleGrid>
    </div>
  );
};

interface OfferCardProps {
  id: Number;
  companyName: string;
  internshipField: string;
  internshipType: string;
}

const OfferCard = (props: OfferCardProps) => {
  const navigate = useNavigate();
  return (
    <div className='bg-white shadow p-6 flex flex-col items-center'>
      <Avatar size={120} className='rounded-full' />
      <div className='mt-2 mb-1 font-semibold text-2xl'>
        {props.companyName}
      </div>
      <div className='my-2 text-lg'>{props.internshipField}</div>
      <div className='mb-3 text-gray-500'>{props.internshipType}</div>
      <Button
        variant={'outline'}
        onClick={() => navigate('/offers/' + props.id)}
      >
        View details
      </Button>
    </div>
  );
};
export default Offers;
