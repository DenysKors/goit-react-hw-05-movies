import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';

import { Wrapper, Header, NavItem, Footer } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <nav>
            <NavItem to="/" end>
              <WhatshotOutlinedIcon />
            </NavItem>
            <NavItem to="/movies">Movie</NavItem>
          </nav>
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Wrapper>
      <Footer />
    </>
  );
};
