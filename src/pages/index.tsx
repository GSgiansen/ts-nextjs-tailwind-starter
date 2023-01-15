import * as React from 'react';

import TimetableLinkForm from '@/components/inputs/TimetableLinkForm';
import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout mt-24 flex min-h-screen flex-col items-center text-center'>
            {/* <Vercel className='text-5xl' /> */}
            <h1 className='mt-4 text-7xl'>Meetups made easier.</h1>
            <p className='text-md mt-4 text-xl text-gray-800'>
              Find common time slots to meet with your friends using NUSFika.
            </p>
            <p className='mt-2 text-sm text-gray-700'></p>
            <TimetableLinkForm />
            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
                Gedong CS Bois for HackNRoll 2023
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
