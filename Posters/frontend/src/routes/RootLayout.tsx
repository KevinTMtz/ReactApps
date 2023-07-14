import { Outlet } from 'react-router-dom';

import MainHeader from '../components/header/MainHeader';

const RootLayout = () => {
  return (
    <>
      <MainHeader />

      <Outlet />
    </>
  );
};

export default RootLayout;
