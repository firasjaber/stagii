import { Avatar, Button, SimpleGrid, Title } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router';

interface Props { }

const data = [
  { id: 0, companyName: 'Proxiweb', secteur: 'Inforamtique' },
  { id: 0, companyName: 'Ben yedder', secteur: 'Mecanique' },
  { id: 0, companyName: 'Naxuum', secteur: 'informatique' },
  { id: 0, companyName: 'After code', secteur: 'Informatique' },
  { id: 0, companyName: 'Jlassi', secteur: 'Electrique' },
  { id: 0, companyName: 'Mercit', secteur: 'Mercit' },
];

const Companies = (props: Props) => {
  return (
    <div>
      <Title order={2} className='mb-4'>
        Companies
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
        {data.map((companies) => (
          <CompanyCard
            id={companies.id}
            companyName={companies.companyName}
            secteur={companies.secteur}
          />
        ))}
      </SimpleGrid>
    </div>
  );
};

interface CompanyCardProps {
  id: Number;
  companyName: string;
  secteur: string;
}

const CompanyCard = (props: CompanyCardProps) => {
  const navigate = useNavigate();
  return (
    <div className='bg-white shadow p-6 flex flex-col items-center'>
      <Avatar size={120} className='rounded-full' />
      <div className='mt-2 mb-1 font-semibold text-2xl'>{props.companyName}</div>
      <div className='mb-3 text-gray-500'>{props.secteur}</div>
      <Button
        variant={'outline'}
        onClick={() => navigate('/company/profile/' + props.id)}
      >
        View Profile
      </Button>
    </div>
  );
};

export default Companies;
