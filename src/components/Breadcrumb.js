import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <>
      {/* ================ Breadcrumb Start ================*/}
      <div
        className='breadcrumb-area bg-cover'
        style={{ backgroundImage: 'url("./assets/img/bg/7.png")' }}
      >
        <div className='container'>
          <div className='breadcrumb-inner'>
            <div className='row justify-content-center'>
              <div className='col-lg-6'>
                <h2 className='page-title'>{title}</h2>
              </div>
              <div className='col-lg-6 text-lg-end'>
                <ul className='page-list'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  {"  "}/ <li>{title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================ Breadcrumb End ================*/}
    </>
  );
};

export default Breadcrumb;
