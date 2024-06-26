import React from 'react';
import { Outlet, useNavigate, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

export const RootLayout = () => {
  const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === 'loading' && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
};
