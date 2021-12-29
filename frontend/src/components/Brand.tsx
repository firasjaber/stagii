import React from 'react';
import { Box, Text } from '@mantine/core';
import { AcademicCapIcon } from '@heroicons/react/solid';

interface Props {}

const Brand = (props: Props) => {
  return (
    <Box className='flex items-center space-x-3 text-blue-700'>
      <AcademicCapIcon className='h-10 w-10' />
      <Text weight={600} className='font-sans text-blue-900 text-2xl'>
        Stagi
      </Text>
    </Box>
  );
};

export default Brand;
