import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import { FloatButton } from 'antd';
import Footer from './Footer';
import { UpOutlined } from '@ant-design/icons';

function MainLayout() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
      <FloatButton.BackTop icon={<UpOutlined/>} />
    </div>
  );
}

export default MainLayout