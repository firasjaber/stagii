import React from 'react';
import { AppShell, Navbar, Header, Input } from '@mantine/core';
import Brand from './Brand';
import NavbarList from './NavbarList';
import { Navigate, Route, Routes, useNavigate } from 'react-router';
import Home from '../pages/Home';
import Students from '../pages/Students';
import Companies from '../pages/Companies';
import Offers from '../pages/Offers';
import Submits from '../pages/Submits';
import Results from '../pages/Results';
import Notifications from '../pages/Notifications';
import { LogoutIcon, SearchIcon } from '@heroicons/react/solid';
import useAuth from '../contexts/useAuth';
import Tickets from '../pages/Tickets';
import Ticket from '../pages/Ticket';
import Company from '../pages/Company';
import Student from '../pages/Student';
import Offer from '../pages/Offer';
import Submit from '../pages/Submit';
import AddCompanyProfile from '../pages/AddCompanyProfile';
import AddStudentProfile from '../pages/AddStudentProfile';
interface Props {}

const MainLayout = (props: Props) => {
  const { user, logout } = useAuth();
  console.log(user);
  const navigate = useNavigate();
  if (!user) {
    return <Navigate to='/login' />;
  }
  return (
    <AppShell
      padding='md'
      navbar={
        <Navbar width={{ base: 300 }} padding='xs'>
          <Navbar.Section grow mt='lg'>
            <NavbarList />
          </Navbar.Section>
          <Navbar.Section className='mb-4'>
            <hr className='text-gray-300 mb-4' />
            <div className='flex items-center justify-between'>
              <div
                className='flex items-center space-x-4 hover:bg-gray-100 p-2 rounded-md cursor-pointer w-full'
                onClick={() =>
                  navigate(
                    user.type === 'STUDENT'
                      ? '/student/profile/add'
                      : '/company/profile/add'
                  )
                }
              >
                <img
                  src={
                    'https://images.generated.photos/p6pAQ3UGbnFfxauhCvPT8uAi-_nVJf1Tzyqx2Bz2II8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTA3MTQwLmpwZw.jpg'
                  }
                  alt='face'
                  className='rounded-full w-12 h-12'
                />
                <div className='flex flex-col'>
                  <div className='font-sans'>
                    {user.firstName + ' ' + user.lastName}
                  </div>
                  <div className='text-gray-400  text-sm'>{user.email}</div>
                </div>
              </div>
              <LogoutIcon
                onClick={() => logout()}
                className='w-8 h-8  text-gray-600 hover:bg-gray-200 rounded-full transition-all ease-in-out p-2 cursor-pointer'
              />
            </div>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} padding='xs'>
          <div className='flex items-center justify-between pl-2'>
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
          backgroundColor: theme.colors.gray[0],
        },
      })}
    >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/students' element={<Students />} />
        <Route path='/student/profile/:id' element={<Student />} />
        <Route path='/student/profile/add' element={<AddStudentProfile />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/offers/:id' element={<Offer />} />
        <Route path='/submits' element={<Submits />} />
        <Route path='/submit/:id' element={<Submit />} />
        <Route path='/results' element={<Results />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/tickets' element={<Tickets />} />
        <Route path='/ticket/:id' element={<Ticket />} />
        <Route path='/company' element={<Companies />} />
        <Route path='/company/profile/:id' element={<Company />} />
        <Route path='/company/profile/add' element={<AddCompanyProfile />} />
      </Routes>
    </AppShell>
  );
};

export default MainLayout;
