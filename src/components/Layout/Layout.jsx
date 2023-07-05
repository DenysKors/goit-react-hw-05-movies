import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper, Header, NavItem, Footer } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Wrapper>
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
      </Wrapper>
      <Footer />
    </>
  );
};
