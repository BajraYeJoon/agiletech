import React from "react";
import { Link } from "react-router-dom";

const CaseStudyAreaTwo = () => {
  return (
    <>
      {/*================== case-study area start ==================*/}
      <div className='case-study-area pd-top-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-5'>
              <div className='section-title text-center'>
                <h6 className='sub-title-sky-blue'>WORK GALLERY</h6>
                <h2 className='title'>Artificial Intelligence Real Results</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-8 col-md-6'>
              <div className='single-case-study-inner style-2'>
                <div className='thumb'>
                  <img src='assets/img/service/11.png' alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/case-study-details'>Mind Tech</Link>
                  </h5>
                  <a className='cat' href='#'>
                    Las vegas
                  </a>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='single-case-study-inner style-2'>
                    <div className='thumb'>
                      <img src='assets/img/service/12.png' alt='img' />
                    </div>
                    <div className='details'>
                      <h5>
                        <Link to='/case-study-details'>Wise Mind</Link>
                      </h5>
                      <a className='cat' href='#'>
                        Las vegas
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='single-case-study-inner style-2'>
                    <div className='thumb'>
                      <img src='assets/img/service/13.png' alt='img' />
                    </div>
                    <div className='details'>
                      <h5>
                        <Link to='/case-study-details'>Tecnology Farms</Link>
                      </h5>
                      <a className='cat' href='#'>
                        Las vegas
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-case-study-inner style-2'>
                <div className='thumb'>
                  <img src='assets/img/service/12.png' alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/case-study-details'>Neural Logic.</Link>
                  </h5>
                  <a className='cat' href='#'>
                    California
                  </a>
                </div>
              </div>
              <div className='single-case-study-inner style-2'>
                <div className='thumb'>
                  <img src='assets/img/service/15.png' alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to='/case-study-details'>AI Farms</Link>
                  </h5>
                  <a className='cat' href='#'>
                    California
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== case-study area end ==================*/}
    </>
  );
};

export default CaseStudyAreaTwo;
