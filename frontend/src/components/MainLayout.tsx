import React from 'react';
import { AppShell, Navbar, Header } from '@mantine/core';
import Brand from './Brand';
import NavbarList from './NavbarList';
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import Students from '../pages/Students';
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
          <Brand />
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
      </Routes>
    </AppShell>
  );
};

export default MainLayout;
