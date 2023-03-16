
import React from 'react';
import Benefits from '../components/Benefits';
import Header from '../components/Header';
import SignUpForm from '../components/SignUpForm';
import TopMessage from '../components/TopMessage';

export default function SignUp() {
  return (
    <div >
      <TopMessage />
      <div className="wrapper bg-[#3B2779] p-5">
        <Header />
        <div className='lg:relative flex flex-col text-[13px] p-3 md:p-5 m-auto lg:flex-row lg:w-[790px] bg-[rgb(249,248,250)] box-border rounded-md'>
          <Benefits />
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}
