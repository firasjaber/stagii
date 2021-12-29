import React from 'react';
import { AppShell, Navbar, Header } from '@mantine/core';
import Brand from './Brand';
interface Props {}

const MainLayout = (props: Props) => {
  return (
    <AppShell
      padding='md'
      navbar={
        <Navbar width={{ base: 300 }} padding='xs'>
          <Navbar.Section grow mt='lg'>
            Grow section
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
      {/* Your application here */}
    </AppShell>
  );
};

export default MainLayout;
