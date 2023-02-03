import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '@mui/material';
import Spiner from '../Spiner/Spiner';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Container sx={{ mt: '16px' }}>
        <Suspense fallback={<Spiner />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
