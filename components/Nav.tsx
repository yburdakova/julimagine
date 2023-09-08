import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

import { navData } from '../constants';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className='fixed bottom-0 flex flex-col px-2 items-center mt-auto xl:justify-center gap-y-4 h-max xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      <div className='flex items-center justify-between w-full my-2 mx-4 px-4 py-8 text-3xl bg-white/10 xl:flex-col xl:justify-center gap-y-10 md:px-40 xl:px-0 h-[80px] xl:h-max backdrop-blur-sm xl:text-xl rounded-full'>
        {navData.map((link, index) => (
          <Link 
            key={index} 
            href={link.path}
            className={`${link.path === pathname && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300`}
          >
            {/* tooltip */ }
              <div className={'absolute pr-14 right-0 hidden xl:group-hover:flex'}>
                <div className={'bg-white text-primary relative flex items-center p-[6px] rounded-[3px]'}>
                  <div className={'text-[12px] leading-none font-semibold capitalize'}>
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className={'border-soild border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'}>
                  </div>
                </div>
              </div>
            {/* icons */ }
            <div className="">
              {React.createElement(link.icon)}
            </div>
            
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
