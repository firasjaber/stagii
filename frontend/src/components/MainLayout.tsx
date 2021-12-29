import React from 'react';
import { AppShell, Navbar, Header, Input } from '@mantine/core';
import Brand from './Brand';
import NavbarList from './NavbarList';
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import Students from '../pages/Students';
import Companies from '../pages/Companies';
import Offers from '../pages/Offers';
import Submits from '../pages/Submits';
import Results from '../pages/Results';
import Notifications from '../pages/Notifications';
import { SearchIcon } from '@heroicons/react/solid';
interface Props {}

const MainLayout = (props: Props) => {
  return (
    <AppShell
      padding='md'
      navbar={
        <Navbar width={{ base: 300 }} padding='xs'>
          <Navbar.Section grow mt='lg'>
            <NavbarList />
          </Navbar.Section>
          <Navbar.Section>Last section</Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} padding='xs'>
          <div className='flex items-center justify-between'>
            <Brand />
            <Input
              className='rounded-md w-80'
              icon={<SearchIcon className='h-5 w-5 text-gray-400' />}
              placeholder='Search for things here...'
            />
          </div>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/students' element={<Students />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/submits' element={<Submits />} />
        <Route path='/results' element={<Results />} />
        <Route path='/notifications' element={<Notifications />} />
      </Routes>
    </AppShell>
  );
};

export default MainLayout;
