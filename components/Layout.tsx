import React from 'react';

import {Nav, Header, TopLeftImg} from './'

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
