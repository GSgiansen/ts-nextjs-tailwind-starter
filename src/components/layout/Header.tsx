import * as React from 'react';
import { FiCoffee } from 'react-icons/fi';

import UnstyledLink from '@/components/links/UnstyledLink';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white'>
      <div className='layout flex h-14 items-center justify-center text-xl'>
        <UnstyledLink
          href='/'
          className='flex items-center gap-2 pt-4 text-2xl font-bold  hover:text-gray-600'
        >
          NUSFika <FiCoffee />
        </UnstyledLink>
      </div>
    </header>
  );
}
