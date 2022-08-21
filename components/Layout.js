import React from 'react'
import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
    const {children} = props;
  return (
    <div className='flex flex-col min-h-screen relative bg-dark p-3 text-stone-50'>
      <Header/>
      <main  className='flex flex-col mt-16 bg-black justify-end'>
        {children}
        <h1>hello there</h1>
      </main>
      <Footer/> 
    </div>
  )
}
