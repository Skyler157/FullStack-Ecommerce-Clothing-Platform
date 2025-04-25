import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our Newsletter and stay updated</p>
        <div>
        <input type="email" placeholder='Enter Your Email' />
        <a href="#">
        <button>Subscribe</button></a>
        </div>
    </div>
  )
}

export default NewsLetter