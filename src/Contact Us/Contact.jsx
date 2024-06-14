import React from 'react';
import  "../App.css";
import Nav from '../header/nav';
import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <div >
      <Nav/>
      <form action="" className='form'>
        <input type="text"  placeholder='Enter Your Name' />
        <input type="email"  placeholder='Enter Your Email' />
        <input type="password"  placeholder='Enter Your password' />
        <button>Submit</button>
      </form>
    <Footer/>
    </div>
  )
}

export default Contact