import React from 'react';
import { Link } from 'react-router-dom';
import {BsTwitter, BsYoutube, BsInstagram, BsFacebook}from "react-icons/bs";

const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-5'>
            <div className='footer-top-data d-flex gap-30 align-items-center'>
              <img src='images/newsletter.png' alt='newsletter' />
              <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
            </div>
          </div>
          <div className='col-7'>
            <div className="input-group">
              <input 
                type="text" 
                className="form-control py-1" 
                placeholder="Your Email Address" 
                aria-label="Your Email Address" 
                aria-describedby="basic-addon2" 
                />
                <span className="input-group-text p-2" id="basic-addon2">
                    Subscribe
                </span>
            </div>
          </div>
        </div>
      </div>

    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div>
              <address className='text-white fs-6'>
                17a,Durosinmi Etti, <br /> Victoria Island, <br /> Lagos.
              </address>
              <a 
                href='tel:123-456' 
                className='mt-3 d-block mb-1 text-white'
              >
                123-456
              </a>
              <a 
                href='mailto:shopwus@gmail.com' 
                className='mt-2 d-block mb-0 text-white'
              >
                shopwus@gmail.com
              </a>
              <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                <a className='text-white' href='/#'>
                  <BsFacebook className='fs-4'/>
                </a>
                <a className='text-white' href='/#'>
                  <BsInstagram className='fs-4'/>
                </a>
                <a className='text-white' href='/#'>
                  <BsTwitter className='fs-4'/>
                </a>
                <a className='text-white' href='/#'>
                  <BsYoutube className='fs-4'/>
                </a>

              </div>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link to='/privacy-policy' className='text-white py-2 mb-4'>Privacy Policy</Link>
              <Link to='/refund-policy' className='text-white py-2 mb-4'>Refund Policy</Link>
              <Link to='/shipping-policy' className='text-white py-2 mb-4'>Shipping Policy</Link>
              <Link to='/term-conditions' className='text-white py-2 mb-4'>Terms & Conditions</Link>
              <Link to='/blogs'className='text-white py-2 mb-4'>Blogs</Link>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-4'>About Us</Link>
              <Link className='text-white py-2 mb-4'>FAQ</Link>
              <Link className='text-white py-2 mb-4'>Contact</Link>
            </div>
          </div>
          <div className='col-2'>
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-4'>Headphones</Link>
              <Link className='text-white py-2 mb-4'>Tablets</Link>
              <Link className='text-white py-2 mb-4'>Watch</Link>
              <Link className='text-white py-2 mb-4'>Laptops</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center nb-0 text-white'>
              &copy; {new Date().getFullYear()}; Powered by developers
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer