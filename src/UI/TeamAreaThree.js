import React from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const TeamAreaThree = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaAngleRight className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaAngleLeft className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/*====================== team area start ======================*/}
      <div
        className='team-area bg-relative pd-top-120 pd-bottom-90'
        style={{ backgroundImage: 'url("assets/img/bg/15.png")' }}
      >
        <div className='container pd-top-120'>
          <div className='row'>
            <div className='col-lg-5'>
              <div className='section-title style-white'>
                <h6 className='sub-title-sky-blue'>MEET OUR EXPERTS</h6>
                <h2 className='title'>Innovation Through Is Intelligence</h2>
              </div>
            </div>
          </div>
          <div className='team-slider owl-carousel slider-control-square slider-control-right-top'>
            <Slider {...settings}>
              <div className='item px-3'>
                <div className='single-team-inner text-center border-radius-5 bg-white'>
                  <div className='thumb bg-gray border-radius-5'>
                    <img src='assets/img/team/1.png' alt='img' />
                    <ul className='team-social-inner border-radius-5 sky'>
                      <li>
                        <a href='#'>
                          <FaFacebookF className='text-white' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaTwitter className='text-white' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaInstagram className='text-white' />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='details'>
                    <h5>
                      <Link to='/team-details'>Devon Lane</Link>
                    </h5>
                    <p>SEO Department</p>
                  </div>
                </div>
              </div>
              <div className='item px-3'>
                <div className='single-team-inner text-center border-radius-5 bg-white'>
                  <div className='thumb bg-gray border-radius-5'>
                    <img src='assets/img/team/2.png' alt='img' />
                    <ul className='team-social-inner border-radius-5 sky'>
                      <li>
                        <a href='#'>
                          <FaFacebookF className='text-white' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaTwitter className='text-white' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaInstagram className='text-white' />
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
              <div className='item px-3'>
                <div className='single-team-inner text-center border-radius-5 bg-white'>
                  <div className='thumb bg-gray border-radius-5'>
                    <img src='assets/img/team/3.png' alt='img' />
                    <ul className='team-social-inner border-radius-5 sky'>
                      <li>
                        <a href='#'>
                          <FaFacebookF className='text-white' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaTwitter className='text-white' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaInstagram className='text-white' />
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
              <div className='item px-3'>
                <div className='single-team-inner text-center border-radius-5 bg-white'>
                  <div className='thumb bg-gray border-radius-5'>
                    <img src='assets/img/team/1.png' alt='img' />
                    <ul className='team-social-inner border-radius-5 sky'>
                      <li>
                        <a href='#'>
                          <FaFacebookF className='text-white' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaTwitter className='text-white' />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <FaInstagram className='text-white' />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='details'>
                    <h5>
                      <Link to='/team-details'>Devon Lane</Link>
                    </h5>
                    <p>SEO Department</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      {/* ====================== team area end ======================*/}
    </>
  );
};

export default TeamAreaThree;
