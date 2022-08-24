import React from 'react'
import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
    const {children} = props;
  return (

    <div className='flex flex-col min-h-screen relative bg-dark text-stone-50'>
      <Header/>
      <main  className='flex flex-1 flex-col p-4 justify-center'> 
        {children}
      </main>
      <Footer/> 
    </div>
  )
}
