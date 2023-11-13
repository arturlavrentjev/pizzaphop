import {FC} from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../components';
import {Footer} from "../components/Footer.tsx";

const MainLayout: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
