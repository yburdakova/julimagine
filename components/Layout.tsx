import React from 'react';

import Nav from './Nav';
import Header from './Header';
import TopLeftImg from './TopLeftImg';

import { sorafont } from '../constants';

const Layout = ({children}: any) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sorafont.variable} font-sora relative`}>
      <TopLeftImg/>
      <Nav/>
      <Header/>
      
      {children}
    </div>
  );
};

export default Layout;
