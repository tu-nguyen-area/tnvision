'use client'

import { useState } from 'react';
import Link from 'next/link';

const links = [
  { name: 'Products', href: '/home' },
  { name: 'Use cases', href: '/' },
  { name: 'Support', href: '/' },
  { name: 'Documents', href: '/' },
  { name: 'About', href: '/' },
];

export default function BarNav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleBarNav() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div>
        <button onClick={toggleBarNav} className="fixed right-0 top-6 z-40 m-3 text-xl z-50 bg-white dark:bg-black p-1 rounded opacity-50 text-black dark:text-white p-2">
                {isOpen ? '✖' : '☰'}
        </button>
          {isOpen && (
            <div>
            <div className="sm:flex justify-center sm:block hidden m-1 mt-8 fixed z-30 right-0 top-0 w-full rounded-xl bg-white dark:bg-black">
                {links.map((link) => {
                  return (
                  <Link key={link.name} href={link.href} className="p-3">
                    {link.name}
                  </Link>
                  );
                })}
              </div>

              <div className="sm:hidden block fixed top-24 right-4 w-[90%] h-[80%] rounded-xl grid text-center bg-white dark:bg-black z-30">
              {links.map((link) => {
                  return (
                  <Link key={link.name} href={link.href} className="p-3">
                    {link.name}
                  </Link>
                  );
                })}
              </div>
              </div>
            )}
      </div>

    </>
  );
}
