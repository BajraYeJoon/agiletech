import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceDetailsArea = () => {
  return (
    <>
      {/* ===================== Service Details Area start ===================== */}
      <div className='service-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-12'>
              <div className='td-sidebar service-sidebar'>
                <div className='widget widget_catagory'>
                  <h5 className='widget-title'>
                    <FaArrowRight /> All Service lists
                  </h5>
                  <ul className='catagory-items'>
                    <li>
                      <Link to='/service-details'> Planning Department</Link>
                    </li>
                    <li>
                      <Link to='/service-details'> Software Department</Link>
                    </li>
                    <li>
                      <Link to='/service-details'> Hardware Department</Link>
                    </li>
                    <li>
                      <Link to='/service-details'> It Department</Link>
                    </li>
                    <li>
                      <Link to='/service-details'> Others Development</Link>
                    </li>
                  </ul>
                </div>
                <div className='widget widget_author text-center'>
                  <div className='thumb'>
                    <img src='assets/img/about/9.png' alt='img' />
                  </div>
                  <div className='details'>
                    <a className='btn btn-base border-radius-5' href='#'>
                      Discover our company +
                    </a>
                  </div>
                </div>
                <div className='widget widget_download'>
                  <h5 className='widget-title'>
                    <FaArrowRight /> Download
                  </h5>
                  <ul>
                    <li>
                      <a href='#'>
                        {" "}
                        Company Profile <FaAngleDoubleRight />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        {" "}
                        Zip File Download <FaAngleDoubleRight />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='blog-details-page-content'>
                <div className='single-blog-inner mb-0'>
                  <div className='thumb'>
                    <img src='assets/img/service/7.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h4>
                      Making this the first true generator on the Internet
                    </h4>
                    <p>
                      Cras varius. Donec vitae orci sed dolor rutrum auctor.
                      Fusce egestas elit eget lorem. Suspendisse nisl elit,
                      rhoncus eget elementum acondimentum eget, diam. Nam at
                      tortor in tellus interdum sagitliquam lobortis. Donec orci
                      lectus, aliquam ut, faucibus non, euismod id, nulla.
                      Curabitur blandit mollis lacus. Nam adipiscing. Vestibulum
                      eu odio. Vivamus laoreet.
                    </p>
                    <p>
                      Lorem available market standard dummy text available
                      market industry Lorem Ipsum simply dummy text of free
                      available market.There are many variations of passages of
                      Lorem Ipsum available, but the majority have suffered
                      alteration in some form,
                    </p>
                    <h4>Get touch have any question ?</h4>
                    <p>
                      It is a long established fact that a reader will be distr
                      acted bioiiy the end gail readable content of a page when
                      looking.
                    </p>
                    <div
                      className='accordion accordion-inner accordion-icon-left mt-3 mb-4'
                      id='accordionExample'
                    >
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingOne'>
                          <button
                            className='accordion-button'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseOne'
                            aria-expanded='true'
                            aria-controls='collapseOne'
                          >
                            What services do you offer?
                          </button>
                        </h2>
                        <div
                          id='collapseOne'
                          className='accordion-collapse collapse show'
                          aria-labelledby='headingOne'
                          data-bs-parent='#accordionExample'
                        >
                          <div className='accordion-body'>
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                            text, search for 'lorem ipsum' will uncover
                          </div>
                        </div>
                      </div>
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingTwo'>
                          <button
                            className='accordion-button collapsed'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseTwo'
                            aria-expanded='false'
                            aria-controls='collapseTwo'
                          >
                            How long does it take for you to complete a project?
                          </button>
                        </h2>
                        <div
                          id='collapseTwo'
                          className='accordion-collapse collapse'
                          aria-labelledby='headingTwo'
                          data-bs-parent='#accordionExample'
                        >
                          <div className='accordion-body'>
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                            text, search for 'lorem ipsum' will uncover
                          </div>
                        </div>
                      </div>
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingThree'>
                          <button
                            className='accordion-button collapsed'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseThree'
                            aria-expanded='false'
                            aria-controls='collapseThree'
                          >
                            How much does it cost to work with your agency?
                          </button>
                        </h2>
                        <div
                          id='collapseThree'
                          className='accordion-collapse collapse'
                          aria-labelledby='headingThree'
                          data-bs-parent='#accordionExample'
                        >
                          <div className='accordion-body'>
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                            text, search for 'lorem ipsum' will uncover
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4>Our Best it company</h4>
                    <p>
                      Thooiie point the of using the table.Your Startup industry
                      is ours standard our service decesion loream saum solar
                      sysem in the world.
                    </p>
                    <div className='row'>
                      <div className='col-md-6'>
                        <ul className='single-list-inner style-check style-check mb-3'>
                          <li>
                            <FaCheckCircle /> Creating a Balanced and Nutritious
                          </li>
                          <li>
                            <FaCheckCircle /> iTechnology that helps grow
                            companies
                          </li>
                          <li>
                            <FaCheckCircle /> Everything you need to succeed
                          </li>
                        </ul>
                      </div>
                      <div className='col-md-6'>
                        <ul className='single-list-inner style-check style-check mb-3'>
                          <li>
                            <FaCheckCircle /> Creating a Balanced and Nutritious
                          </li>
                          <li>
                            <FaCheckCircle /> iTechnology that helps grow
                            companies
                          </li>
                          <li>
                            <FaCheckCircle /> Everything you need to succeed
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== Service Details Area End ===================== */}
    </>
  );
};

export default ServiceDetailsArea;
