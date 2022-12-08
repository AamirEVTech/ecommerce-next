import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - E-Store' : title}</title>
        <meta name="description" content="Online Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between min-h-screen">
        <header>
          <nav className="flex h-12 justify-between shadow-md px-4 items-center font-bold">
            <Link href="/" className='text-lg"'>
              <span className="text-lg">e</span>
              <span className="text-red-700 text-2xl ">Store</span>
            </Link>
            <div className="font-bold text-gray-500 ">
              <Link href="/cart" className="p-2">
                Cart
              </Link>
              <Link href="/login" className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>

        <main className="container mt-4 px-4 m-auto">{children}</main>
        <footer className="flex h-10 shadow-inner justify-center items-center">
          Copyright &copy; 2022 EV-Tech..
        </footer>
      </div>
    </>
  );
}
