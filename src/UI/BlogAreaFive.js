import React from "react";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const BlogAreaFive = () => {
  return (
    <>
      {/*===================== Blog Area Three start =====================*/}
      <div className='blog-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='section-title text-center'>
                <h6 className='sub-title-sky-blue'>RECENT BLOG</h6>
                <h2 className='title'>
                  Discover a World of Sustainable Alternatives
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-list style-3'>
                <div className='thumb'>
                  <img src='assets/img/blog/4.png' alt='img' />
                </div>
                <div className='details'>
                  <ul className='blog-meta'>
                    <li>
                      <span>
                        <img src='assets/img/testimonial/1.png' alt='img' />
                      </span>{" "}
                      Admin
                    </li>
                    <li>
                      <FaCalendarAlt /> Category
                    </li>
                  </ul>
                  <h5 className='mb-3'>
                    <Link to='/blog-details'>
                      Transforming businesses, one pixel at a time
                    </Link>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit consectetur Malesuada sed diam in the
                    aliquam
                  </p>
                  <div className='btn-wrap text-end pe-2'>
                    <Link className='read-more-text' to='/blog-details'>
                      Read More <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-list style-3'>
                <div className='thumb'>
                  <img src='assets/img/blog/5.png' alt='img' />
                </div>
                <div className='details'>
                  <ul className='blog-meta'>
                    <li>
                      <span>
                        <img src='assets/img/testimonial/1.png' alt='img' />
                      </span>{" "}
                      Admin
                    </li>
                    <li>
                      <FaCalendarAlt /> Category
                    </li>
                  </ul>
                  <h5 className='mb-3'>
                    <Link to='/blog-details'>
                      The Importance of a Strong Digital for Strategy
                    </Link>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit consectetur Malesuada sed diam in the
                    aliquam
                  </p>
                  <div className='btn-wrap text-end pe-2'>
                    <Link className='read-more-text' to='/blog-details'>
                      Read More <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-list style-3'>
                <div className='thumb'>
                  <img src='assets/img/blog/6.png' alt='img' />
                </div>
                <div className='details'>
                  <ul className='blog-meta'>
                    <li>
                      <span>
                        <img src='assets/img/testimonial/1.png' alt='img' />
                      </span>{" "}
                      Admin
                    </li>
                    <li>
                      <FaCalendarAlt /> Category
                    </li>
                  </ul>
                  <h5 className='mb-3'>
                    <Link to='/blog-details'>
                      Creating Engaging Content: A Guide for Digital
                    </Link>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit consectetur Malesuada sed diam in the
                    aliquam
                  </p>
                  <div className='btn-wrap text-end pe-2'>
                    <Link className='read-more-text' to='/blog-details'>
                      Read More <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== BlogAreaFive End =====================*/}
    </>
  );
};

export default BlogAreaFive;
