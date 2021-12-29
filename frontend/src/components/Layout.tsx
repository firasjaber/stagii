import React from 'react';
import { AppShell, Navbar, Header } from '@mantine/core';
import Brand from './Brand';
interface Props {}

const Layout = (props: Props) => {
  return (
    <AppShell
      padding='md'
      navbar={
        <Navbar width={{ base: 300 }} height={500} padding='xs'>
          {/* First section with normal height (depends on section content) */}
          <Navbar.Section>
            <Brand />
          </Navbar.Section>

          {/* Grow section will take all available space that is not taken by first and last sections */}
          <Navbar.Section grow mt='lg'>
            Grow section
          </Navbar.Section>

          {/* Last section with normal height (depends on section content) */}
          <Navbar.Section>Last section</Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} padding='xs'>
          {/* Header content */}
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

export default Layout;
