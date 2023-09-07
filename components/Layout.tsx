import React from 'react';

import Nav from './Nav';
import Header from './Header';
import TopLeftImg from './TopLeftImg';

import { sorafont } from '../constants';

const Layout = ({children}) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sorafont.variable} font-sora relative`}>
      <Nav/>
      <Header/>
      <TopLeftImg/>
      {children}
    </div>
  );
};

export default Layout;
