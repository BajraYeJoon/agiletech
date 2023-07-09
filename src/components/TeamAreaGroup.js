import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamAreaGroup = () => {
  return (
    <>
      {/* ================= TeamAreaGroup Start =================*/}
      <div className='team-area bg-relative pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-team-inner text-center'>
                <div className='thumb'>
                  <img src='assets/img/team/1.png' alt='img' />
                  <ul className='team-social-inner'>
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
                  </ul>
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/team-details'>Devon Lane</Link>
                  </h5>
                  <p>Merketing Department</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-team-inner text-center'>
                <div className='thumb'>
                  <img src='assets/img/team/2.png' alt='img' />
                  <ul className='team-social-inner'>
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
                  </ul>
                </div>
                <div className='details'>
                  <h5>
                  <Link to='/team-details'>Darrell Steward</Link>
                  </h5>
                  <p>It Department</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-team-inner text-center'>
                <div className='thumb'>
                  <img src='assets/img/team/3.png' alt='img' />
                  <ul className='team-social-inner'>
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
                  </ul>
                </div>
                <div className='details'>
                  <h5>
                  <Link to='/team-details'>Bessie Cooper</Link>
                  </h5>
                  <p>Software Department</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-team-inner text-center'>
                <div className='thumb'>
                  <img src='assets/img/team/1.png' alt='img' />
                  <ul className='team-social-inner'>
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
                  </ul>
                </div>
                <div className='details'>
                  <h5>
                  <Link to='/team-details'>Devon Lane</Link>
                  </h5>
                  <p>Merketing Department</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-team-inner text-center'>
                <div className='thumb'>
                  <img src='assets/img/team/2.png' alt='img' />
                  <ul className='team-social-inner'>
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
                  </ul>
                </div>
                <div className='details'>
                  <h5>
                  <Link to='/team-details'>Darrell Steward</Link>
                  </h5>
                  <p>It Department</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-team-inner text-center'>
                <div className='thumb'>
                  <img src='assets/img/team/3.png' alt='img' />
                  <ul className='team-social-inner'>
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
                  </ul>
                </div>
                <div className='details'>
                  <h5>
                  <Link to='/team-details'>Bessie Cooper</Link>
                  </h5>
                  <p>Software Department</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================= TeamAreaGroup End =================*/}
    </>
  );
};

export default TeamAreaGroup;
