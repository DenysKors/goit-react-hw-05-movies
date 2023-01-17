import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Header, NavItem } from './Layout.styled';

export const Layout = () => {
  return (
    <Box>
      <Header>
        <nav>
          <NavItem to="/" end>
            Home
          </NavItem>
          <NavItem to="/movies">Movies</NavItem>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
