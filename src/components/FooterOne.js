import React from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <>
      {/* ================== Footer One Start ==================*/}
      <footer className='footer-area bg-black bg-cover'>
        <div className='footer-subscribe'>
          <div className='container'>
            <div
              className='footer-subscribe-inner bg-cover'
              style={{ backgroundImage: 'url("./assets/img/bg/6.png")' }}
            >
              <div className='row'>
                <div className='col-lg-6'>
                  <h2 className='mb-lg-0 mb-3'>Subscribe To Our Newsletter</h2>
                </div>
                <div className='col-lg-6 align-self-center text-lg-end'>
                  <input type='text' placeholder='Your e-mail address' />
                  <a className='btn btn-black border-radius-0' href='#'>
                    Submit now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget_about'>
                <div className='thumb'>
                  <img src='assets/img/logo2.png' alt='img' />
                </div>
                <div className='details'>
                  <p>
                    Melbourne is simply is dumiomy is text Lorem Ipsum is simply
                  </p>
                  <p className='mt-3'>
                    <FaPhoneAlt /> (+888) 123 456 765
                  </p>
                  <p className='mt-2'>
                    <FaEnvelope /> (+888) 123 456 765
                  </p>
                  <ul className='social-media'>
                    <li>
                      <a href='#'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaYoutube />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Our Service</h4>
                <ul>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Ui Design
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Web design
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Digital marketing{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Video Editing
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Pc Repairs
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Web Development
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Pay links</h4>
                <ul>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Credit industrys
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Reasearch sector
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Finance Sector{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Credit industrys
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Reasearch sector
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Finance Sector
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget-recent-post'>
                <h4 className='widget-title'>Contact us</h4>
                <ul>
                  <li>
                    <div className='media'>
                      <div className='media-left'>
                        <img src='assets/img/widget/1.png' alt='blog' />
                      </div>
                      <div className='media-body align-self-center'>
                        <div className='post-info mb-2'>
                          <FaCalendarAlt />
                          <span>january 11, 2023</span>
                        </div>
                        <h6 className='title mb-0'>
                          <Link to='/blog-details'>
                            Social Media For Promote Business.
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='media'>
                      <div className='media-left'>
                        <img src='assets/img/widget/2.png' alt='blog' />
                      </div>
                      <div className='media-body align-self-center'>
                        <div className='post-info mb-2'>
                          <FaCalendarAlt />
                          <span>january 11, 2023</span>
                        </div>
                        <h6 className='title mb-0'>
                          <Link to='/blog-details'>
                            Marketing For Base market watch
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 align-self-center'>
                <p>© Yoursitename 2023 | All Rights Reserved</p>
              </div>
              <div className='col-md-6 text-lg-end'>
                <a href='#'>Trams &amp; Condition</a>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ================== Footer One  end ==================*/}
    </>
  );
};

export default FooterOne;
